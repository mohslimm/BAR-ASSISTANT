// Bar Assistant - Complete Client-side App

// --- Sample Database (extend as needed) ---
const database = {
  cocktails: [
    {
      id: 1,
      name: "Margarita",
      category: "cocktails",
      type: "tequila",
      emoji: "🍹",
      description: "Classic Mexican cocktail with fresh lime juice, triple sec, and tequila.",
      ingredients: [
        { name: "Tequila", amount: "2 oz" },
        { name: "Triple Sec", amount: "1 oz" },
        { name: "Fresh Lime Juice", amount: "1.5 oz" },
        { name: "Simple Syrup", amount: "0.5 oz" }
      ],
      method:
        "1. Fill a cocktail shaker with ice\n" +
        "2. Add tequila, triple sec, lime juice, and simple syrup\n" +
        "3. Shake vigorously for 10-15 seconds\n" +
        "4. Strain into a salt-rimmed margarita glass filled with ice\n" +
        "5. Garnish with a lime wheel",
      glass: "Margarita Glass",
      garnish: "Salt rim, Lime wheel",
      difficulty: "Easy",
      strength: "Medium"
    },
    {
      id: 2,
      name: "Mojito",
      category: "cocktails",
      type: "rum",
      emoji: "🍃",
      description: "Refreshing Cuban cocktail with mint, lime, rum, and soda water.",
      ingredients: [
        { name: "White Rum", amount: "2 oz" },
        { name: "Fresh Lime Juice", amount: "1 oz" },
        { name: "Simple Syrup", amount: "0.75 oz" },
        { name: "Fresh Mint", amount: "8-10 leaves" },
        { name: "Club Soda", amount: "2-3 oz" }
      ],
      method:
        "1. Lightly muddle mint with lime juice and simple syrup in a highball glass\n" +
        "2. Add rum and fill the glass with ice\n" +
        "3. Top with club soda\n" +
        "4. Gently stir to combine\n" +
        "5. Garnish with a mint sprig and lime wedge",
      glass: "Highball",
      garnish: "Mint sprig, Lime wedge",
      difficulty: "Easy",
      strength: "Light"
    },
    {
      id: 3,
      name: "Old Fashioned",
      category: "cocktails",
      type: "whiskey",
      emoji: "🥃",
      description: "Spirit-forward classic featuring whiskey, sugar, and bitters.",
      ingredients: [
        { name: "Bourbon or Rye Whiskey", amount: "2 oz" },
        { name: "Simple Syrup", amount: "0.25 oz" },
        { name: "Angostura Bitters", amount: "2-3 dashes" },
        { name: "Orange Peel", amount: "1" }
      ],
      method:
        "1. Add simple syrup and bitters to a rocks glass\n" +
        "2. Add a large ice cube and whiskey\n" +
        "3. Stir until chilled and diluted\n" +
        "4. Express orange peel oils over the glass and garnish",
      glass: "Rocks",
      garnish: "Orange peel",
      difficulty: "Easy",
      strength: "Strong"
    },
    {
      id: 4,
      name: "Dry Martini",
      category: "cocktails",
      type: "gin",
      emoji: "🍸",
      description: "Elegant and crisp mixture of gin and dry vermouth.",
      ingredients: [
        { name: "Gin", amount: "2.5 oz" },
        { name: "Dry Vermouth", amount: "0.5 oz" }
      ],
      method:
        "1. Add gin and vermouth to a mixing glass with ice\n" +
        "2. Stir until very cold\n" +
        "3. Strain into a chilled coupe\n" +
        "4. Garnish with a lemon twist or olive",
      glass: "Coupe or Martini",
      garnish: "Lemon twist or Olive",
      difficulty: "Medium",
      strength: "Strong"
    }
  ],
  spirits: [
    {
      id: 101,
      name: "Vodka",
      category: "spirits",
      type: "vodka",
      emoji: "🧊",
      description: "Neutral spirit distilled from grains or potatoes; versatile for mixing.",
      abv: "35–40% ABV",
      origin: "Eastern Europe"
    },
    {
      id: 102,
      name: "Gin",
      category: "spirits",
      type: "gin",
      emoji: "🌿",
      description: "Juniper-forward spirit with botanical character.",
      abv: "37.5–47% ABV",
      origin: "England / Netherlands"
    },
    {
      id: 103,
      name: "Tequila",
      category: "spirits",
      type: "tequila",
      emoji: "🌵",
      description: "Agave-based spirit from Mexico; blanco, reposado, añejo styles.",
      abv: "35–40% ABV",
      origin: "Mexico"
    }
  ],
  beers: [
    {
      id: 201,
      name: "Lager",
      category: "beers",
      emoji: "🍺",
      description: "Clean, crisp, bottom-fermented beer.",
      style: "Pale Lager",
      abv: "4–5% ABV",
      bitterness: "Low"
    },
    {
      id: 202,
      name: "IPA",
      category: "beers",
      emoji: "🍺",
      description: "Hoppy ale with pronounced bitterness and aroma.",
      style: "American IPA",
      abv: "6–7.5% ABV",
      bitterness: "Medium–High"
    }
  ],
  wines: [
    {
      id: 301,
      name: "Red Wine",
      category: "wines",
      emoji: "🍷",
      description: "Fermented with skins for color and tannin.",
      style: "Cabernet Sauvignon",
      sweetness: "Dry",
      abv: "12–15% ABV"
    },
    {
      id: 302,
      name: "White Wine",
      category: "wines",
      emoji: "🥂",
      description: "Typically fermented without skins; fresh and aromatic.",
      style: "Sauvignon Blanc",
      sweetness: "Dry",
      abv: "11–13% ABV"
    }
  ],
  liquors: [
    {
      id: 401,
      name: "Triple Sec",
      category: "liquors",
      emoji: "🟠",
      description: "Orange-flavored liqueur used in Margaritas and more.",
      sweetness: "Sweet",
      abv: "20–40% ABV"
    },
    {
      id: 402,
      name: "Amaretto",
      category: "liquors",
      emoji: "🍯",
      description: "Almond-flavored Italian liqueur.",
      sweetness: "Sweet",
      abv: "21–28% ABV"
    }
  ]
};

// --- DOM Elements ---
const contentArea = document.getElementById("contentArea");
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");
const navBtns = Array.from(document.querySelectorAll(".tab"));
const modal = document.getElementById("detailModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

// --- State ---
const state = {
  category: "all",
  query: "",
  base: "" // vodka/gin/rum/tequila/whiskey/brandy
};

// --- Utils ---
const byName = (a, b) => a.name.localeCompare(b.name);
const norm = (s = "") => String(s).toLowerCase();
const escapeHtml = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

function debounce(fn, ms = 200) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

function allItems() {
  return Object.values(database).flat().slice().sort(byName);
}

const itemById = new Map(allItems().map((x) => [String(x.id), x]));

// --- Rendering ---
function render() {
  const items = filterItems();
  if (!items.length) {
    contentArea.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔎</div>
        No results. Try a different search or filter.
      </div>
    `;
    return;
  }

  const html = items.map(cardHTML).join("");
  contentArea.innerHTML = html;
}

function filterItems() {
  const q = norm(state.query);
  const base = norm(state.base);
  const cat = state.category;

  return allItems().filter((item) => {
    // Category filter
    if (cat !== "all" && item.category !== cat) return false;

    // Base spirit filter (applies if item.type matches selected base)
    if (base) {
      if (!item.type || norm(item.type) !== base) return false;
    }

    // Search query: name, type, ingredients
    if (q) {
      const fields = [
        norm(item.name),
        norm(item.type || ""),
        norm(item.description || "")
      ];

      // Ingredients (for cocktails)
      if (Array.isArray(item.ingredients)) {
        fields.push(...item.ingredients.map((ing) => norm(ing.name)));
      }

      // Beer/wine specific
      ["style", "sweetness", "bitterness", "abv", "origin", "glass", "garnish", "difficulty", "strength"]
        .forEach((k) => fields.push(norm(item[k] || "")));

      if (!fields.some((f) => f.includes(q))) return false;
    }

    return true;
  });
}

function cap(s) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

function cardHTML(item) {
  const hasIngredients = Array.isArray(item.ingredients) && item.ingredients.length;
  const previewIngredients = hasIngredients
    ? `
      <div class="ingredients-list">
        ${item.ingredients.slice(0, 4).map(ing => `
          <div class="ingredient">
            <span>${escapeHtml(ing.name)}</span>
            <span>${escapeHtml(ing.amount || "")}</span>
          </div>
        `).join("")}
        ${item.ingredients.length > 4 ? `<div style="opacity:.7;font-size:.85em;margin-top:6px">+${item.ingredients.length - 4} more…</div>` : ""}
      </div>
    `
    : "";

  const details = [
    item.type ? detailRow("Base", cap(item.type)) : "",
    item.glass ? detailRow("Glass", item.glass) : "",
    item.garnish ? detailRow("Garnish", item.garnish) : "",
    item.difficulty ? detailRow("Difficulty", item.difficulty) : "",
    item.strength ? detailRow("Strength", item.strength) : "",
    item.style ? detailRow("Style", item.style) : "",
    item.bitterness ? detailRow("Bitterness", item.bitterness) : "",
    item.sweetness ? detailRow("Sweetness", item.sweetness) : "",
    item.abv ? detailRow("ABV", item.abv) : "",
    item.origin ? detailRow("Origin", item.origin) : ""
  ].filter(Boolean).join("");

  return `
    <div class="card" data-id="${String(item.id)}" role="button" tabindex="0" aria-label="Open details for ${escapeHtml(item.name)}">
      <div class="card-header">
        <h3>${escapeHtml(item.name)}</h3>
        <div class="card-category">${escapeHtml(cap(item.category))}</div>
      </div>
      <div class="card-image">${escapeHtml(item.emoji || "🍸")}</div>
      <div class="card-content">
        <p class="card-description">${escapeHtml(item.description || "")}</p>
        <div class="card-details">
          ${details}
        </div>
        ${previewIngredients}
        <button class="expand-btn" data-id="${String(item.id)}">See details</button>
      </div>
    </div>
  `;
}

function detailRow(label, value) {
  return `
    <div class="detail-item">
      <div class="detail-label">${escapeHtml(label)}</div>
      <div class="detail-value">${escapeHtml(value)}</div>
    </div>
  `;
}

// --- Modal ---
function openModal(item) {
  modalTitle.textContent = item.name;

  const tags = [
    item.category ? `<span class="tag">${escapeHtml(cap(item.category))}</span>` : "",
    item.type ? `<span class="tag">${escapeHtml(cap(item.type))}</span>` : "",
    item.difficulty ? `<span class="tag">Difficulty: ${escapeHtml(item.difficulty)}</span>` : "",
    item.strength ? `<span class="tag">Strength: ${escapeHtml(item.strength)}</span>` : "",
    item.abv ? `<span class="tag">ABV: ${escapeHtml(item.abv)}</span>` : ""
  ].filter(Boolean).join("");

  const details = [
    item.glass ? detailRow("Glass", item.glass) : "",
    item.garnish ? detailRow("Garnish", item.garnish) : "",
    item.style ? detailRow("Style", item.style) : "",
    item.bitterness ? detailRow("Bitterness", item.bitterness) : "",
    item.sweetness ? detailRow("Sweetness", item.sweetness) : "",
    item.origin ? detailRow("Origin", item.origin) : ""
  ].filter(Boolean).join("");

  const ingredients = Array.isArray(item.ingredients) && item.ingredients.length
    ? `
      <div class="modal-section">
        <h3>Ingredients</h3>
        <div>
          ${item.ingredients.map(ing => `
            <div class="ingredient-item">
              <span>${escapeHtml(ing.name)}</span>
              <span>${escapeHtml(ing.amount || "")}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `
    : "";

  const method = item.method
    ? `
      <div class="modal-section">
        <h3>Method</h3>
        <ol>
          ${String(item.method).split(/\n+/).map(step => `<li>${escapeHtml(step.replace(/^\d+\.\s*/, ""))}</li>`).join("")}
        </ol>
      </div>
    `
    : "";

  modalBody.innerHTML = `
    <div class="modal-section">
      <h3>Overview</h3>
      <p>${escapeHtml(item.description || "")}</p>
      <div style="margin-top:10px">${tags}</div>
    </div>

    ${details ? `
      <div class="modal-section">
        <h3>Details</h3>
        ${details}
      </div>` : ""}

    ${ingredients}
    ${method}
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Expose for close button onclick in HTML
window.closeModal = closeModal;

// --- Events ---
navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    navBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    state.category = btn.dataset.category || "all";
    render();
  });
});

searchInput.addEventListener("input", debounce((e) => {
  state.query = e.target.value || "";
  render();
}, 200));

filterSelect.addEventListener("change", (e) => {
  state.base = e.target.value || "";
  render();
});

contentArea.addEventListener("click", (e) => {
  const expandBtn = e.target.closest(".expand-btn");
  const card = e.target.closest(".card");
  const id = expandBtn?.dataset.id || card?.dataset.id;
  if (!id) return;
  const item = itemById.get(String(id));
  if (item) openModal(item);
});

contentArea.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    const card = e.target.closest(".card");
    if (!card) return;
    const item = itemById.get(String(card.dataset.id));
    if (item) {
      e.preventDefault();
      openModal(item);
    }
  }
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});

// --- Init ---
render();
