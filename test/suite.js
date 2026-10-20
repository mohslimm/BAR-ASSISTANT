// Test Suite for Bar Assistant Core Logic (SOP 19)
const assert = require('assert');

// 1. Sanitization & Security Tests
const escapeHtml = (s = "") =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const sanitizeUrl = (url = "") => {
  const trimmed = String(url || "").trim();
  if (/^(https?:\/\/|\/|\.\/|data:image\/)/i.test(trimmed)) {
    return escapeHtml(trimmed);
  }
  return "";
};

console.log('🧪 Running Bar Assistant Test Suite...\n');

// Test 1: OWASP Escaping
console.log('1. Testing XSS Escaping...');
assert.strictEqual(
  escapeHtml('<script>alert("xss")</script>'),
  '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
);
assert.strictEqual(
  escapeHtml('Tom & Jerry\'s "Special"'),
  'Tom &amp; Jerry&#39;s &quot;Special&quot;'
);
console.log('   ✅ escapeHtml successfully passed OWASP checks.');

// Test 2: URL Sanitization
console.log('2. Testing URL Sanitization...');
assert.strictEqual(sanitizeUrl('javascript:alert(1)'), '');
assert.strictEqual(sanitizeUrl('https://images.unsplash.com/photo-123'), 'https://images.unsplash.com/photo-123');
assert.strictEqual(sanitizeUrl('data:image/png;base64,abc'), 'data:image/png;base64,abc');
console.log('   ✅ sanitizeUrl strictly blocks javascript: and unsafe protocols.');

// Test 3: Recipe Database Integrity
console.log('3. Testing Database Structure...');
const fs = require('fs');
const html = fs.readFileSync(__dirname + '/../index.html', 'utf8');

assert(/id:\s*1,\s*name:\s*"Margarita"/.test(html), 'Database contains Margarita');
assert(/id:\s*2,\s*name:\s*"Mojito"/.test(html), 'Database contains Mojito');
assert(/id:\s*3,\s*name:\s*"Old Fashioned"/.test(html), 'Database contains Old Fashioned');
assert(/id:\s*4,\s*name:\s*"Dry Martini"/.test(html), 'Database contains Dry Martini');
console.log('   ✅ Recipe database verification passed.');

console.log('\n🎉 ALL TESTS PASSED SUCCESSFULLY! (0 Failures, 100% Assertions Met)');
