// Database
window.DB = {
  cocktails: [
    {
      id: 1,
      name: "Margarita",
      category: "cocktails",
      base: "tequila",
      technique: "shaker",
      emoji: "🍹",
      rating: 5,
      description: "The perfect balance of tequila, lime, and orange liqueur served in a salt-rimmed glass.",
      ingredients: [
        { name: "Tequila Blanco", amount: "2 oz" },
        { name: "Cointreau", amount: "1 oz" },
        { name: "Fresh Lime Juice", amount: "1 oz" },
        { name: "Agave Syrup", amount: "0.25 oz" }
      ],
      steps: [
        "Rim a rocks glass with salt",
        "Add all ingredients to a shaker with ice",
        "Shake vigorously for 15 seconds",
        "Strain into the glass over fresh ice",
        "Garnish with a lime wheel"
      ],
      glass: "Rocks",
      garnish: "Lime wheel, Salt rim"
    },
    {
      id: 2,
      name: "Mojito",
      category: "cocktails",
      base: "rum",
      technique: "muddle",
      emoji: "🍃",
      rating: 5,
      description: "Refreshing Cuban cocktail with mint, lime, rum, and soda water.",
      ingredients: [
        { name: "White Rum", amount: "2 oz" },
        { name: "Fresh Lime Juice", amount: "0.75 oz" },
        { name: "Simple Syrup", amount: "0.5 oz" },
        { name: "Mint Leaves", amount: "10 leaves" },
        { name: "Club Soda", amount: "2 oz" }
      ],
      steps: [
        "Lightly muddle mint with lime and syrup in glass",
        "Add rum and fill with crushed ice",
        "Top with club soda",
        "Stir gently",
        "Garnish with mint sprig and lime"
      ],
      glass: "Highball",
      garnish: "Mint sprig, Lime"
    },
    {
      id: 3,
      name: "Old Fashioned",
      category: "cocktails",
      base: "bourbon",
      technique: "stir",
      emoji: "🥃",
      rating: 5,
      description: "Classic whiskey cocktail with bitters and sugar, dating back to the 1800s.",
      ingredients: [
        { name: "Bourbon", amount: "2 oz" },
        { name: "Simple Syrup", amount: "0.25 oz" },
        { name: "Angostura Bitters", amount: "2 dashes" },
        { name: "Orange Peel", amount: "1" }
      ],
      steps: [
        "Add syrup and bitters to glass",
        "Add large ice cube and bourbon",
        "Stir gently for 30 seconds",
        "Express orange peel oils over drink",
        "Drop peel into glass"
      ],
      glass: "Rocks",
      garnish: "Orange peel"
    },
    {
      id: 4,
      name: "Negroni",
      category: "cocktails",
      base: "gin",
      technique: "stir",
      emoji: "🔴",
      rating: 5,
      description: "Bold Italian aperitivo with equal parts gin, Campari, and vermouth.",
      ingredients: [
        { name: "Gin", amount: "1 oz" },
        { name: "Campari", amount: "1 oz" },
        { name: "Sweet Vermouth", amount: "1 oz" }
      ],
      steps: [
        "Add all ingredients to mixing glass with ice",
        "Stir for 20-30 seconds",
        "Strain into rocks glass over ice",
        "Express orange peel oils",
        "Garnish with orange peel"
      ],
      glass: "Rocks",
      garnish: "Orange peel"
    },
    {
      id: 5,
      name: "Daiquiri",
      category: "cocktails",
      base: "rum",
      technique: "shaker",
      emoji: "🍋",
      rating: 5,
      description: "Classic Cuban cocktail with white rum, lime, and simple syrup.",
      ingredients: [
        { name: "White Rum", amount: "2 oz" },
        { name: "Fresh Lime Juice", amount: "0.75 oz" },
        { name: "Simple Syrup", amount: "0.5 oz" }
      ],
      steps: [
        "Add all ingredients to shaker with ice",
        "Shake vigorously for 15 seconds",
        "Strain into chilled coupe",
        "Garnish with lime wheel"
      ],
      glass: "Coupe",
      garnish: "Lime wheel"
    },
    {
      id: 6,
      name: "Manhattan",
      category: "cocktails",
      base: "rye whisky",
      technique: "stir",
      emoji: "🗽",
      rating: 5,
      description: "Classic New York cocktail with whiskey, vermouth, and bitters.",
      ingredients: [
        { name: "Rye Whiskey", amount: "2 oz" },
        { name: "Sweet Vermouth", amount: "1 oz" },
        { name: "Angostura Bitters", amount: "2 dashes" }
      ],
      steps: [
        "Add ingredients to mixing glass with ice",
        "Stir for 30 seconds",
        "Strain into chilled coupe",
        "Garnish with cherry"
      ],
      glass: "Coupe",
      garnish: "Cherry"
    },
    {
      id: 7,
      name: "Whiskey Sour",
      category: "cocktails",
      base: "bourbon",
      technique: "shaker",
      emoji: "🍋",
      rating: 5,
      description: "Perfectly balanced sour with whiskey, lemon, and optional egg white.",
      ingredients: [
        { name: "Bourbon", amount: "2 oz" },
        { name: "Lemon Juice", amount: "0.75 oz" },
        { name: "Simple Syrup", amount: "0.5 oz" },
        { name: "Egg White", amount: "1 (optional)" }
      ],
      steps: [
        "Dry shake all ingredients without ice",
        "Add ice and shake vigorously",
        "Strain into rocks glass over ice",
        "Garnish with lemon and cherry"
      ],
      glass: "Rocks",
      garnish: "Lemon, Cherry"
    },
    {
      id: 8,
      name: "Espresso Martini",
      category: "cocktails",
      base: "vodka",
      technique: "shaker",
      emoji: "☕",
      rating: 5,
      description: "Modern classic combining vodka, coffee liqueur, and fresh espresso.",
      ingredients: [
        { name: "Vodka", amount: "2 oz" },
        { name: "Kahlúa", amount: "0.5 oz" },
        { name: "Fresh Espresso", amount: "1 oz" },
        { name: "Simple Syrup", amount: "0.25 oz" }
      ],
      steps: [
        "Brew fresh espresso and cool",
        "Add all ingredients to shaker",
        "Shake very hard for 20 seconds",
        "Strain into chilled coupe",
        "Garnish with 3 coffee beans"
      ],
      glass: "Coupe",
      garnish: "Coffee beans"
    },
    {
      id: 9,
      name: "Martini",
      category: "cocktails",
      base: "gin",
      technique: "stir",
      emoji: "🍸",
      rating: 5,
      description: "The epitome of cocktail elegance—gin and dry vermouth.",
      ingredients: [
        { name: "Gin", amount: "2.5 oz" },
        { name: "Dry Vermouth", amount: "0.5 oz" }
      ],
      steps: [
        "Add gin and vermouth to mixing glass",
        "Fill with ice and stir 30-40 seconds",
        "Strain into chilled coupe",
        "Express lemon twist or add olive"
      ],
      glass: "Coupe",
      garnish: "Lemon twist or Olive"
    },
    {
      id: 10,
      name: "Paloma",
      category: "cocktails",
      base: "tequila",
      technique: "build",
      emoji: "🍊",
      rating: 5,
      description: "Mexico's most popular cocktail—tequila with grapefruit soda.",
      ingredients: [
        { name: "Tequila Blanco", amount: "2 oz" },
        { name: "Lime Juice", amount: "0.5 oz" },
        { name: "Grapefruit Soda", amount: "4 oz" },
        { name: "Salt", amount: "Pinch" }
      ],
      steps: [
        "Rim glass with salt",
        "Fill glass with ice",
        "Add tequila and lime juice",
        "Top with grapefruit soda",
        "Stir gently and garnish"
      ],
      glass: "Highball",
      garnish: "Grapefruit wedge"
    }
  ],
  
  spirits: [
    {
      id: 101,
      name: "Vodka",
      category: "spirits",
      emoji: "🧊",
      rating: 4,
      description: "Neutral spirit distilled from grains or potatoes—the most versatile mixer.",
      origin: "Eastern Europe",
      abv: "40%"
    },
    {
      id: 102,
      name: "Gin",
      category: "spirits",
      emoji: "🌿",
      rating: 5,
      description: "Juniper-forward botanical spirit. London Dry is the classic style.",
      origin: "England",
      abv: "40-47%"
    },
    {
      id: 103,
      name: "Tequila",
      category: "spirits",
      emoji: "🌵",
      rating: 5,
      description: "Distilled from blue agave in Mexico. Blanco, Reposado, and Añejo styles.",
      origin: "Mexico",
      abv: "38-40%"
    },
    {
      id: 104,
      name: "Rum",
      category: "spirits",
      emoji: "🏝️",
      rating: 4,
      description: "Sugarcane spirit from the Caribbean. White, gold, and dark varieties.",
      origin: "Caribbean",
      abv: "40-50%"
    },
    {
      id: 105,
      name: "Whiskey",
      category: "spirits",
      emoji: "🥃",
      rating: 5,
      description: "Aged grain spirit. Bourbon, Rye, Scotch, and Irish varieties.",
      origin: "Scotland/USA",
      abv: "40-50%"
    },
    {
      id: 106,
      name: "Brandy",
      category: "spirits",
      emoji: "🍇",
      rating: 4,
      description: "Distilled from wine. Cognac and Armagnac are premium French brandies.",
      origin: "France",
      abv: "35-60%"
    }
  ],
  
  wines: [
    {
      id: 201,
      name: "Cabernet Sauvignon",
      category: "wines",
      emoji: "🍷",
      rating: 5,
      type: "Red",
      description: "Full-bodied red with bold tannins and dark fruit flavors.",
      region: "Bordeaux, Napa",
      abv: "13-15%"
    },
    {
      id: 202,
      name: "Pinot Noir",
      category: "wines",
      emoji: "🍷",
      rating: 5,
      type: "Red",
      description: "Light to medium red with silky texture and red fruit notes.",
      region: "Burgundy, Oregon",
      abv: "12-14%"
    },
    {
      id: 203,
      name: "Chardonnay",
      category: "wines",
      emoji: "🥂",
      rating: 4,
      type: "White",
      description: "Versatile white ranging from crisp to rich and buttery.",
      region: "Burgundy, California",
      abv: "13-14%"
    },
    {
      id: 204,
      name: "Sauvignon Blanc",
      category: "wines",
      emoji: "🥂",
      rating: 5,
      type: "White",
      description: "Crisp white with citrus and herbaceous notes.",
      region: "Loire, New Zealand",
      abv: "12-13%"
    },
    {
      id: 205,
      name: "Rosé",
      category: "wines",
      emoji: "🌸",
      rating: 4,
      type: "Rosé",
      description: "Pink wine with light fruit flavors—perfect for summer.",
      region: "Provence",
      abv: "11-13%"
    }
  ]
};

