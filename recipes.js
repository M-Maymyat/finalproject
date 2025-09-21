// Recipe Data
const recipes = [
  // Chinese
  {
    name: "Kung Pao Chicken",
    image:"kung pao chicken.jpg",
    category: "Chinese",
    ingredients: [
      "500g chicken breast",
      "2 tbsp soy sauce",
      "1 tbsp rice vinegar",
      "2 cloves garlic (chopped)",
      "1 bell pepper (chopped)",
      "1/2 cup roasted peanuts",
      "Dried red chilies",
      "1 tbsp cornstarch"
    ],
    steps: [
      "Cut chicken into cubes and marinate with soy sauce and cornstarch.",
      "Stir-fry garlic, chilies, and bell pepper.",
      "Add chicken and cook until golden.",
      "Stir in peanuts, vinegar, and sauce. Serve hot."
    ]
  },
  {
    name: "Sweet and Sour Chicken",
    image:"sweet and sour.jpg",
    category: "Chinese",
    ingredients: [
      "400g chicken(cubed)",
      "1 egg",
      "1/2 cup cornstarch",
      "1 bell pepper",
      "1 onion",
      "1/2 cup pineapple chunks",
      "3 tbsp ketchup",
      "2 tbsp vinegar",
      "2 tbsp sugar"
    ],
    steps: [
      "Coat chicken in egg and cornstarch, then deep fry until crispy.",
      "Stir-fry onion, bell pepper, and pineapple.",
      "Mix ketchup, vinegar, and sugar for sauce.",
      "Add chicken and toss everything together."
    ]
  },
  {
    name: "Mapo Tofu",
    image:"mapo.jpg",
    category: "Chinese",
    ingredients: [
      "300g soft tofu",
      "150g minced pork",
      "2 tbsp doubanjiang (chili bean paste)",
      "2 cloves garlic",
      "1 tbsp soy sauce",
      "1/2 cup chicken broth",
      "1 tbsp cornstarch"
    ],
    steps: [
      "Fry garlic and pork until browned.",
      "Add doubanjiang and soy sauce, stir well.",
      "Add tofu and chicken broth, simmer 5 mins.",
      "Thicken with cornstarch slurry and serve."
    ]
  },
  {
    name: "Chow Mein",
    image:"chowmein.jpg",
    category: "Chinese",
    ingredients: [
      "200g egg noodles",
      "100g chicken/beef",
      "1 carrot (julienned)",
      "1 bell pepper",
      "2 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "2 tbsp oil"
    ],
    steps: [
      "Boil noodles and set aside.",
      "Stir-fry meat and vegetables.",
      "Add noodles and sauces, toss well.",
      "Serve hot."
    ]
  },

  // Korean
  {
    name: "Bibimbap",
    image:"bibimbap.jpg",
    category: "Korean",
    ingredients: [
      "2 cups rice",
      "100g beef (sliced)",
      "1 carrot (julienned)",
      "1 zucchini (julienned)",
      "Spinach",
      "1 fried egg",
      "2 tbsp gochujang (chili paste)"
    ],
    steps: [
      "Cook rice and set aside.",
      "Stir-fry beef and vegetables separately.",
      "Arrange rice in bowl, top with beef, veggies, and egg.",
      "Serve with gochujang."
    ]
  },
  {
    name: "Kimchi Jjigae",
   image:"kimchijjigae.jpg",
    category: "Korean",
    ingredients: [
      "1 cup kimchi",
      "100g pork belly",
      "200g tofu",
      "1 onion",
      "2 cups water",
      "1 tbsp gochugaru (chili flakes)"
    ],
    steps: [
      "Boil kimchi, pork, and onion in water.",
      "Add chili flakes and season with salt.",
      "Add tofu and simmer 10 minutes.",
      "Serve hot."
    ]
  },
  {
    name: "Bulgogi",
    image:"bulgogi.jpg",
    category: "Korean",
    ingredients: [
      "300g beef (thinly sliced)",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil",
      "1 tbsp sugar",
      "2 cloves garlic",
      "1 onion"
    ],
    steps: [
      "Marinate beef in soy sauce, sesame oil, sugar, and garlic.",
      "Stir-fry with onion until cooked.",
      "Serve with rice or lettuce wraps."
    ]
  },
  {
    name: "Tteokbokki",
    image:"tteokbokki.jpg",
    category: "Korean",
    ingredients: [
      "300g rice cakes",
      "2 tbsp gochujang",
      "1 tbsp sugar",
      "2 cups anchovy broth",
      "1 boiled egg",
      "1 green onion"
    ],
    steps: [
      "Boil rice cakes in broth.",
      "Add gochujang and sugar, stir until thick.",
      "Top with egg and green onion.",
      "Serve hot."
    ]
  },

  // Japanese
  {
    name: "Sushi Rolls",
    image:"sushi.jpg",
    category: "Japanese",
    ingredients: [
      "2 cups sushi rice",
      "Nori sheets",
      "Cucumber, avocado, salmon/tuna",
      "Soy sauce",
      "Pickled ginger"
    ],
    steps: [
      "Cook sushi rice and season with vinegar.",
      "Place rice on nori, add fillings.",
      "Roll tightly and slice into pieces.",
      "Serve with soy sauce and ginger."
    ]
  },
  {
    name: "Ramen",
    image:"ramen.jpg", 
    category: "Japanese",
    ingredients: [
      "200g ramen noodles",
      "2 cups chicken broth",
      "1 boiled egg",
      "100g pork slices",
      "1 tbsp soy sauce",
      "Green onions"
    ],
    steps: [
      "Cook noodles and set aside.",
      "Heat broth with soy sauce.",
      "Add noodles, pork, and toppings.",
      "Serve hot."
    ]
  },
  {
    name: "Okonomiyaki",
    image:"okonomiyaki.jpg",
    category: "Japanese",
    ingredients: [
      "1 cup flour",
      "1 egg",
      "1/2 cup cabbage (shredded)",
      "100g shrimp or pork",
      "Okonomiyaki sauce",
      "Mayonnaise"
    ],
    steps: [
      "Mix flour, egg, and water into batter.",
      "Add cabbage and meat.",
      "Cook pancake on skillet, flip until golden.",
      "Top with sauce and mayo."
    ]
  },
  {
    name: "Tempura",
    image:"tempura.jpg",
    category: "Japanese",
    ingredients: [
      "Shrimp, zucchini, sweet potato",
      "1 cup flour",
      "1 egg",
      "1 cup cold water",
      "Oil for frying"
    ],
    steps: [
      "Mix egg, water, and flour into light batter.",
      "Dip seafood/vegetables into batter.",
      "Fry until golden and crispy.",
      "Serve with dipping sauce."
    ]
  },

  // Burmese
  {
    name: "Mohinga (မုန့်ဟင်းခါး)",
    image:"mohinga.jpg",
    category: "Burmese",
    ingredients: [
      "500g catfish (or any white fish)",
      "150g rice flour",
      "100g chickpea flour",
      "3 stalks lemongrass",
      "4 cloves garlic",
      "2 onions",
      "1 tbsp turmeric powder",
      "Fish sauce",
      "Banana stem (optional)",
      "Hard-boiled eggs",
      "Crispy fritters for garnish"
    ],
    steps: [
      "Boil the fish until cooked, remove bones, and shred the meat.",
      "In a pot, fry onion, garlic, and lemongrass until fragrant.",
      "Add turmeric and fish flakes, stir well.",
      "Mix rice flour and chickpea flour with water, add to the pot.",
      "Simmer until thick and smooth, season with fish sauce.",
      "Serve hot with rice noodles, egg, banana stem, and fritters."
    ]
  },
  {
    name: "Shan Noodles (ရှမ်းခေါက်ဆွဲ)",
    image:"shannoodles.jpg",
    category: "Burmese",
    ingredients: [
      "300g rice noodles",
      "200g chicken or pork (minced)",
      "2 tomatoes",
      "3 cloves garlic",
      "2 tbsp soy sauce",
      "1 tbsp chili oil",
      "Spring onions",
      "Peanuts (crushed)",
      "Pickled mustard greens"
    ],
    steps: [
      "Cook rice noodles and set aside.",
      "Make sauce: fry garlic and tomato until soft, add minced meat.",
      "Season with soy sauce and chili oil.",
      "Serve noodles topped with sauce, peanuts, and pickled mustard greens.",
      "Garnish with spring onions."
    ]
  },
  {
    name: "Tea Leaf Salad (လက်ဖက်သုပ်)",
    image:"tealeafsalad.jpg",
    category: "Burmese",
    ingredients: [
      "2 tbsp fermented tea leaves",
      "Fried garlic",
      "Peanuts",
      "Sesame seeds",
      "Chopped cabbage",
      "Tomatoes",
      "Dried shrimp (optional)",
      "Green chili",
      "Lime juice",
      "Fish sauce"
    ],
    steps: [
      "Wash and chop cabbage and tomatoes.",
      "Mix tea leaves with lime juice and fish sauce.",
      "Add peanuts, sesame seeds, fried garlic, and dried shrimp.",
      "Toss everything together.",
      "Serve as a salad or with rice."
    ]
  },
  {
    name: "Coconut Noodles (အုန်းနို့ခေါက်ဆွဲ)",
    image:"coconutnoodles.jpg",
    category: "Burmese",
    ingredients: [
      "300g rice noodles",
      "200g chicken (cut into pieces)",
      "400ml coconut milk",
      "2 onions",
      "3 cloves garlic",
      "1 tbsp turmeric powder",
      "2 tbsp chickpea flour",
      "Boiled eggs",
      "Lime wedges",
      "Chili flakes"
    ],
    steps: [
      "Fry onion and garlic until fragrant, add turmeric and chicken.",
      "Pour in coconut milk and simmer until chicken is cooked.",
      "Mix chickpea flour with water and add to the curry to thicken.",
      "Cook noodles separately and drain.",
      "Serve noodles in a bowl, pour coconut curry over them.",
      "Top with egg, lime, and chili flakes."
    ]
  },

  // Thai
  {
    name: "Pad Thai",
    image:"padthai.jpg",  
    category: "Thai",
    ingredients: [
      "200g rice noodles",
      "100g shrimp",
      "1 egg",
      "2 tbsp fish sauce",
      "1 tbsp tamarind paste",
      "1/4 cup peanuts",
      "Bean sprouts"
    ],
    steps: [
      "Soak noodles until soft.",
      "Stir-fry shrimp and egg.",
      "Add noodles, sauce, and peanuts.",
      "Serve with lime and sprouts."
    ]
  },
  {
    name: "Green Curry",
    image:"greencurry.jpg",
    category: "Thai",
    ingredients: [
      "200g chicken",
      "2 tbsp green curry paste",
      "1 cup coconut milk",
      "1 eggplant",
      "Basil leaves"
    ],
    steps: [
      "Fry curry paste in oil.",
      "Add chicken and coconut milk.",
      "Simmer with eggplant until tender.",
      "Garnish with basil leaves."
    ]
  },
  {
    name: "Tom Yum Soup",
    image:"tomyum.jpg",
    category: "Thai",
    ingredients: [
      "200g shrimp",
      "3 cups chicken stock",
      "Lemongrass",
      "Galangal",
      "Kaffir lime leaves",
      "1 tbsp chili paste"
    ],
    steps: [
      "Boil stock with lemongrass, galangal, and lime leaves.",
      "Add shrimp and chili paste.",
      "Simmer for 5 minutes.",
      "Serve hot with lime juice."
    ]
  },
  {
    name: "Som Tum (Papaya Salad)",
    image:"somtum.jpg",
    category: "Thai",
    ingredients: [
      "2 cups shredded green papaya",
      "1 tomato",
      "1 chili",
      "2 tbsp fish sauce",
      "1 tbsp lime juice",
      "1 tbsp sugar",
      "1/4 cup peanuts"
    ],
    steps: [
      "Pound chili, garlic, and peanuts in mortar.",
      "Add papaya, tomato, fish sauce, lime, sugar.",
      "Mix well and serve."
    ]
  },
];

// Example function to display recipes
function showRecipes() {
  recipes.forEach(r => {
    console.log(`🍽️ ${r.name} (${r.category})`);
    console.log("Ingredients:", r.ingredients.join(", "));
    console.log("Steps:", r.steps.join(" -> "));
    console.log("-----------------------------");
  });
}

// Call function to test
showRecipes();
