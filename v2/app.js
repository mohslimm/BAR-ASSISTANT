// DOM Elements
const sidebarNav = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');
const pageTitle = document.getElementById('pageTitle');
const pageSubtitle = document.getElementById('pageSubtitle');
const searchInput = document.getElementById('searchInput');

// Counts
const cocktailCount = document.getElementById('cocktailCount');
const wineCount = document.getElementById('wineCount');
const beerCount = document.getElementById('beerCount');
const customCount = document.getElementById('customCount');

// Detail Modal
const detailModal = document.getElementById('detailModal');
const closeDetail = document.getElementById('closeDetail');
const detailTitle = document.getElementById('detailTitle');
const detailEmoji = document.getElementById('detailEmoji');
const detailMeta = document.getElementById('detailMeta');
const detailBody = document.getElementById('detailBody');

// Custom Recipes
const createModal = document.getElementById('createModal');
const closeCreate = document.getElementById('closeCreate');
const btnCreateCocktail = document.getElementById('btnCreateCocktail');
const btnCancelCreate = document.getElementById('btnCancelCreate');
const cocktailForm = document.getElementById('cocktailForm');
const btnAddIngredient = document.getElementById('btnAddIngredient');
const ingredientsList = document.getElementById('ingredientsList');

let customCocktails = JSON.parse(localStorage.getItem('customCocktails')) || [];

// Initialization
function init() {
  updateCounts();
  renderGrid('discover');
  setupEventListeners();
  setupChatbot();
}

function updateCounts() {
  const customLen = customCocktails.length;
  cocktailCount.textContent = database.cocktails.length;
  wineCount.textContent = database.wines.length;
  beerCount.textContent = database.beers.length;
  customCount.textContent = customLen;

  document.getElementById('totalCocktails').textContent = database.cocktails.length;
  document.getElementById('totalWines').textContent = database.wines.length;
  document.getElementById('totalBeers').textContent = database.beers.length;
  document.getElementById('totalCustom').textContent = customLen;
}

function switchView(viewId) {
  // Update sidebar active class
  sidebarNav.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === viewId);
  });

  // Update views active class
  views.forEach(view => {
    view.classList.remove('active');
  });

  // Set titles based on view
  const titles = {
    'discover': { title: 'Discover', subtitle: 'Explore our curated collection' },
    'cocktails': { title: 'Cocktails', subtitle: 'Classic and modern mixes' },
    'wines': { title: 'Wines', subtitle: 'Red, white, and sparkling' },
    'beers': { title: 'Beers', subtitle: 'Ales, lagers, and stouts' },
    'custom': { title: 'My Cocktails', subtitle: 'Your signature recipes' },
    'assistant': { title: 'AI Mixologist', subtitle: 'Your personal digital bartender' }
  };

  if (titles[viewId]) {
    pageTitle.textContent = titles[viewId].title;
    pageSubtitle.textContent = titles[viewId].subtitle;
  }

  // Routing Logic
  if (viewId === 'discover') {
    document.getElementById('discoverView').classList.add('active');
    renderGrid(viewId);
  } else if (viewId === 'assistant') {
    document.getElementById('assistantView').classList.add('active');
  } else if (viewId === 'custom') {
    document.getElementById('customView').classList.add('active');
    renderCustomRecipes();
  } else {
    document.getElementById('listView').classList.add('active');
    renderGrid(viewId);
  }
}

function renderGrid(type, query = '', filters = {}) {
  const container = type === 'discover' 
    ? document.getElementById('featuredGrid') 
    : document.getElementById('itemsGrid');
    
  if (!container) return;
  container.innerHTML = '';

  let items = [];
  if (type === 'discover') {
    items = database.cocktails.slice(0, 4); // Only show top 4 on discover
  } else if (database[type]) {
    items = database[type];
  }

  // Filter Logic
  items = items.filter(item => {
    // 1. Search Query
    if (query) {
      const searchTerms = [
        item.name, 
        item.description, 
        item.base, 
        ...(item.ingredients || []).map(i => i.name)
      ].join(' ').toLowerCase();
      
      if (!searchTerms.includes(query.toLowerCase())) return false;
    }

    // 2. Base Spirit Filter (If applicable)
    if (filters.base && item.type !== filters.base) return false;

    // 3. Category/Type specific filters (e.g. strength, difficulty)
    if (filters.strength && item.strength && item.strength.toLowerCase() !== filters.strength.toLowerCase()) return false;

    return true;
  });

  if (type !== 'discover') {
    document.getElementById('resultsCount').textContent = \`\${items.length} result\${items.length !== 1 ? 's' : ''}\`;
  }

  items.forEach(item => {
    container.appendChild(createCard(item));
  });

  if (items.length === 0) {
    container.innerHTML = '<div class="empty-state">No results found matching your criteria.</div>';
  }
}

function renderCustomRecipes() {
  const customGrid = document.getElementById('customGrid');
  const emptyCustom = document.getElementById('emptyCustom');

  customGrid.innerHTML = '';
  if (customCocktails.length === 0) {
    emptyCustom.style.display = 'block';
  } else {
    emptyCustom.style.display = 'none';
    customCocktails.forEach(item => {
      customGrid.appendChild(createCard(item, true));
    });
  }
}

function createCard(item, isCustom = false) {
  const card = document.createElement('div');
  card.className = 'recipe-card';
  card.innerHTML = \`
    <div class="card-image" style="background-image: url('\${item.image || ''}')">\${!item.image ? '🍸' : ''}</div>
    <div class="card-content">
      <div class="card-category">\${item.category || 'Cocktail'} \${isCustom ? '<span class="badge">Custom</span>' : ''}</div>
      <h3 class="card-title">\${item.name}</h3>
      <p class="card-desc">\${item.description || 'A custom crafted recipe.'}</p>
    </div>
  \`;
  card.addEventListener('click', () => openDetailModal(item));
  return card;
}

function openDetailModal(item) {
  detailTitle.textContent = item.name;
  detailEmoji.innerHTML = item.image ? \`<img src="\${item.image}" alt="\${item.name}" style="width:100%; height:100%; object-fit:cover; border-radius:12px;">\` : '🍸';
  
  detailMeta.innerHTML = \`
    \${item.strength ? \`<span>💪 \${item.strength}</span>\` : ''}
    \${item.difficulty ? \`<span>⏱️ \${item.difficulty}</span>\` : ''}
    \${item.glass ? \`<span>🥃 \${item.glass}</span>\` : ''}
  \`;

  let bodyHtml = \`<div class="detail-description">\${item.description || 'No description provided.'}</div>\`;

  if (item.ingredients && item.ingredients.length > 0) {
    bodyHtml += '<div class="detail-section"><h3>Ingredients</h3><ul class="ingredient-list">';
    item.ingredients.forEach(ing => {
      bodyHtml += \`<li><span>\${ing.name}</span> <span class="amount">\${ing.amount}</span></li>\`;
    });
    bodyHtml += '</ul></div>';
  }

  if (item.method) {
    bodyHtml += \`<div class="detail-section"><h3>Preparation</h3><p style="white-space:pre-wrap; line-height:1.6; color:var(--text-gray);">\${item.method}</p></div>\`;
  }

  detailBody.innerHTML = bodyHtml;
  detailModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Event Listeners
function setupEventListeners() {
  sidebarNav.forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
  });

  // Category Pills
  document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
    });
  });

  searchInput.addEventListener('input', (e) => {
    const val = e.target.value;
    const activeView = document.querySelector('.nav-item.active').dataset.view;
    if (['cocktails', 'wines', 'beers'].includes(activeView)) {
      renderGrid(activeView, val);
    }
  });

  // Filter Modal
  const filterModal = document.getElementById('filterModal');
  const btnFilter = document.getElementById('btnFilter');
  const closeFilter = document.getElementById('closeFilter');
  const btnResetFilters = document.getElementById('btnResetFilters');
  const btnApplyFilters = document.getElementById('btnApplyFilters');

  let activeFilters = { base: '', strength: '' };

  btnFilter.addEventListener('click', () => {
    filterModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderFilterChips();
  });

  closeFilter.addEventListener('click', () => {
    filterModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  btnResetFilters.addEventListener('click', () => {
    activeFilters = { base: '', strength: '' };
    renderFilterChips();
    applyFilters();
  });

  btnApplyFilters.addEventListener('click', () => {
    applyFilters();
    filterModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  function renderFilterChips() {
    const baseChips = ['vodka', 'gin', 'rum', 'tequila', 'whiskey', 'brandy'];
    const strengthChips = ['Light', 'Medium', 'Strong'];

    document.getElementById('filterBase').innerHTML = baseChips.map(b => 
      \`<button type="button" class="filter-chip \${activeFilters.base === b ? 'active' : ''}" data-type="base" data-value="\${b}">\${cap(b)}</button>\`
    ).join('');

    document.getElementById('filterStrength').innerHTML = strengthChips.map(s => 
      \`<button type="button" class="filter-chip \${activeFilters.strength === s ? 'active' : ''}" data-type="strength" data-value="\${s}">\${s}</button>\`
    ).join('');

    // Add click listeners to chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        const type = e.target.dataset.type;
        const val = e.target.dataset.value;
        
        // Toggle off if already active
        if (activeFilters[type] === val) {
          activeFilters[type] = '';
        } else {
          activeFilters[type] = val;
        }
        renderFilterChips(); // re-render to update active classes
      });
    });
  }

  function applyFilters() {
    const activeView = document.querySelector('.nav-item.active').dataset.view;
    if (['cocktails', 'wines', 'beers', 'discover'].includes(activeView)) {
      renderGrid(activeView, searchInput.value, activeFilters);
    }
  }

  // Modals
  closeDetail.addEventListener('click', () => {
    detailModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  btnCreateCocktail.addEventListener('click', () => {
    createModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    initIngredientRows();
  });

  [closeCreate, btnCancelCreate].forEach(btn => {
    btn.addEventListener('click', () => {
      createModal.classList.remove('active');
      document.body.style.overflow = '';
      cocktailForm.reset();
    });
  });

  btnAddIngredient.addEventListener('click', () => {
    ingredientsList.appendChild(createIngredientRow());
  });

  cocktailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveCustomCocktail();
  });
}

function createIngredientRow() {
  const row = document.createElement('div');
  row.className = 'ingredient-row';
  row.style.display = 'flex';
  row.style.gap = '10px';
  row.style.marginBottom = '10px';
  row.innerHTML = \`
    <input type="text" placeholder="Ingredient (e.g. Vodka)" style="flex:2" required>
    <input type="text" placeholder="Amount (e.g. 2 oz)" style="flex:1" required>
    <button type="button" class="btn-remove" style="background:var(--bg-card); border:1px solid var(--border); color:var(--text-gray); border-radius:8px; width:40px; cursor:pointer;" onclick="this.parentElement.remove()">✕</button>
  \`;
  return row;
}

function initIngredientRows() {
  ingredientsList.innerHTML = '';
  ingredientsList.appendChild(createIngredientRow());
  ingredientsList.appendChild(createIngredientRow());
}

function saveCustomCocktail() {
  const ingredients = [];
  document.querySelectorAll('.ingredient-row').forEach(row => {
    const inputs = row.querySelectorAll('input');
    if (inputs[0].value) {
      ingredients.push({ name: inputs[0].value, amount: inputs[1].value });
    }
  });

  const newCocktail = {
    id: 'c_' + Date.now(),
    name: document.getElementById('formName').value,
    type: document.getElementById('formBase').value,
    glass: document.getElementById('formGlass').value,
    description: document.getElementById('formDescription').value,
    method: document.getElementById('formSteps').value,
    ingredients: ingredients,
    category: 'custom'
  };

  customCocktails.push(newCocktail);
  localStorage.setItem('customCocktails', JSON.stringify(customCocktails));
  
  createModal.classList.remove('active');
  document.body.style.overflow = '';
  cocktailForm.reset();
  
  updateCounts();
  if (document.querySelector('.nav-item.active').dataset.view === 'custom') {
    renderCustomRecipes();
  }
}

function setupChatbot() {
  const form = document.getElementById('chatForm');
  const input = document.getElementById('chatInput');
  const messagesContainer = document.getElementById('chatMessages');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;

    // Add user message
    messagesContainer.innerHTML += \`
      <div class="message user">
        <div class="message-content">
          <p>\${escapeHtml(query)}</p>
        </div>
      </div>
    \`;

    input.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Simulate AI thinking and response
    setTimeout(() => {
      let response = "I'm still learning, but I'm here to help you mix the perfect drink. Could you ask about a specific ingredient or cocktail like 'Margarita' or 'Gin'?";
      const q = query.toLowerCase();

      if (q.includes('gin')) {
        response = "Gin is fantastic! It's the base for classic botanical cocktails like a Dry Martini, Negroni, or a simple Gin & Tonic.";
      } else if (q.includes('summer')) {
        response = "For summer, I highly recommend tropical and refreshing drinks. A Piña Colada, Mojito, or a classic Margarita are perfect for hot days!";
      } else if (q.includes('margarita')) {
        response = "Ah, the Margarita! You'll need 2 oz Tequila, 1 oz Cointreau, and 1 oz fresh lime juice. Shake vigorously with ice, and serve in a salt-rimmed glass.";
      }

      messagesContainer.innerHTML += \`
        <div class="message bot">
          <div class="message-avatar">🤖</div>
          <div class="message-content">
            <p>\${response}</p>
          </div>
        </div>
      \`;
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 600);
  });

  document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      input.value = chip.textContent;
      form.dispatchEvent(new Event('submit'));
    });
  });
}

// Run Initialization
init();
