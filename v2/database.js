const database = {
  cocktails: [
    {
      id: 1,
      name: "Margarita",
      category: "classic",
      type: "tequila",
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80",
      description: "The Margarita is a timeless classic with a perfect balance of tequila, lime, and orange liqueur.",
      ingredients: [
        { name: "Tequila (Blanco)", amount: "2 oz" },
        { name: "Cointreau", amount: "1 oz" },
        { name: "Fresh Lime Juice", amount: "1 oz" },
        { name: "Agave Syrup (optional)", amount: "0.25 oz" }
      ],
      method: "1. Rim a rocks glass with salt.\n2. Shake all ingredients with ice.\n3. Strain into the prepared glass.\n4. Garnish with a lime wheel.",
      glass: "Rocks",
      garnish: "Lime wheel, Salt rim",
      difficulty: "Easy",
      strength: "Medium",
      taste: "Citrus, Tangy"
    },
    {
      id: 2,
      name: "Mojito",
      category: "refreshing",
      type: "rum",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
      description: "Refreshing Cuban cocktail with mint, lime, rum, and soda water.",
      ingredients: [
        { name: "White Rum", amount: "2 oz" },
        { name: "Fresh Lime Juice", amount: "0.75 oz" },
        { name: "Simple Syrup", amount: "0.5 oz" },
        { name: "Fresh Mint Leaves", amount: "10-12 leaves" },
        { name: "Club Soda", amount: "2 oz" }
      ],
      method: "1. Muddle mint, lime juice, and syrup.\n2. Add rum and crushed ice.\n3. Top with club soda.\n4. Garnish with mint sprig.",
      glass: "Highball",
      garnish: "Mint sprig, Lime wedge",
      difficulty: "Easy",
      strength: "Light",
      taste: "Minty, Fresh"
    },
    {
      id: 3,
      name: "Old Fashioned",
      category: "strong",
      type: "whiskey",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
      description: "Spirit-forward classic featuring whiskey, sugar, and aromatic bitters.",
      ingredients: [
        { name: "Bourbon or Rye Whiskey", amount: "2 oz" },
        { name: "Simple Syrup", amount: "0.25 oz" },
        { name: "Angostura Bitters", amount: "2-3 dashes" },
        { name: "Orange Peel", amount: "1 piece" }
      ],
      method: "1. Add simple syrup and bitters to a rocks glass.\n2. Add a large ice cube and whiskey.\n3. Stir gently.\n4. Express orange peel and garnish.",
      glass: "Rocks",
      garnish: "Orange peel, Luxardo cherry",
      difficulty: "Medium",
      strength: "Strong",
      taste: "Whiskey-forward, Aromatic"
    },
    {
      id: 4,
      name: "Piña Colada",
      category: "tropical",
      type: "rum",
      image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?w=800&q=80",
      description: "A tropical blend of rum, coconut cream, and pineapple juice.",
      ingredients: [
        { name: "White Rum", amount: "2 oz" },
        { name: "Coconut Cream", amount: "1.5 oz" },
        { name: "Pineapple Juice", amount: "1.5 oz" }
      ],
      method: "1. Add all ingredients to a shaker or blender.\n2. Shake with ice or blend until smooth.\n3. Pour into a tall glass.\n4. Garnish with pineapple.",
      glass: "Hurricane",
      garnish: "Pineapple wedge, Maraschino cherry",
      difficulty: "Easy",
      strength: "Medium",
      taste: "Sweet, Tropical"
    },
    {
      id: 5,
      name: "Whiskey Sour",
      category: "sour",
      type: "whiskey",
      image: "https://images.unsplash.com/photo-1615332215708-13fa74d1494e?w=800&q=80",
      description: "A perfectly balanced sour cocktail featuring whiskey, lemon juice, and simple syrup.",
      ingredients: [
        { name: "Bourbon", amount: "2 oz" },
        { name: "Fresh Lemon Juice", amount: "0.75 oz" },
        { name: "Simple Syrup", amount: "0.5 oz" },
        { name: "Egg White (optional)", amount: "1" }
      ],
      method: "1. Dry shake all ingredients.\n2. Add ice and shake vigorously.\n3. Strain into a rocks glass.\n4. Garnish with lemon wheel and cherry.",
      glass: "Rocks",
      garnish: "Lemon wheel, Luxardo cherry",
      difficulty: "Medium",
      strength: "Medium",
      taste: "Tart, Sweet"
    }
  ],
  wines: [
    {
      id: 101,
      name: "Cabernet Sauvignon",
      category: "wines",
      type: "red",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
      description: "Full-bodied red wine with bold tannins and dark fruit flavors.",
      style: "Red Wine",
      sweetness: "Dry",
      abv: "13–15% ABV",
      taste: "Blackcurrant, Cedar"
    },
    {
      id: 102,
      name: "Sauvignon Blanc",
      category: "wines",
      type: "white",
      image: "https://images.unsplash.com/photo-1474722883778-ab0fdaa7a0e2?w=800&q=80",
      description: "Crisp white wine with vibrant acidity and citrus notes.",
      style: "White Wine",
      sweetness: "Dry",
      abv: "12–13% ABV",
      taste: "Citrus, Herbaceous"
    }
  ],
  beers: [
    {
      id: 201,
      name: "Pale Lager",
      category: "beers",
      type: "lager",
      image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&q=80",
      description: "Clean, crisp, and refreshing bottom-fermented beer.",
      style: "Pale Lager",
      abv: "4–5.5% ABV",
      bitterness: "Low"
    },
    {
      id: 202,
      name: "IPA",
      category: "beers",
      type: "ale",
      image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80",
      description: "Hoppy, aromatic ale with pronounced bitterness.",
      style: "American IPA",
      abv: "6–7.5% ABV",
      bitterness: "Medium-High"
    }
  ]
};

// Global export
window.database = database;
