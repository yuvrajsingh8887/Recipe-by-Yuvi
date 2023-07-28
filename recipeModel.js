
class Recipe {
  constructor(id, title, ingredients, instructions, prepTime, cookTime, totalTime, servingSize, imageUrl) {
    this.id = id;
    this.title = title;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.prepTime = prepTime;
    this.cookTime = cookTime;
    this.totalTime = totalTime;
    this.servingSize = servingSize;
    this.imageUrl = imageUrl;
    this.ratings = [];
    this.reviews = [];
    this.isFavorite = false;
  }
}

const sampleRecipes = [
  new Recipe(
    1,
    "Homemade Smash Burgers",
    ["beef", "cheese", "buns", "lettuce", "tomato"],
    "1. Preheat the grill to high heat.\n2. Form the beef into patties and season with salt and pepper.\n3. Grill the patties for 2-3 minutes on each side until they reach your desired doneness.\n4. Add cheese on top of the patties during the last minute of cooking.\n5. Assemble the burgers with buns, lettuce, and tomato slices.\n6. Serve and enjoy!",
    "15 minutes",
    "10 minutes",
    "25 minutes",
    "4 servings",
    "https://www.allrecipes.com/thmb/ThV2NIFC3DRPi78s0Q-Mv0CYOTc=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/Smash-Burgers-1x1-1-2000-202a436fe5274b06b383a76284bb96d7.jpg",
    [],
    []
  ),
  new Recipe(
    2,
    "Bang Bang Sauce",
    ["mayonnaise", "sweet chili sauce", "sriracha"],
    "1. In a bowl, mix all the ingredients until well combined.\n2. Cover the sauce and refrigerate for at least 30 minutes before serving.\n3. Serve as a dipping sauce for various dishes.",
    "5 minutes",
    "0 minutes",
    "5 minutes",
    "8 servings",
    "https://www.allrecipes.com/thmb/Fy1mCrp5Z6J-wNSDiIELca7e7QQ=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/7579460-bang-bang-sauce-Kims-Cooking-Now-4x3-1-5341019cce894635b720d02724b7d818.jpg"
    ,
    [],
    []
  ),

  new Recipe(
    3,
    "Chef John's Copycat McRib Sandwich",
    ["pork ribs", "barbecue sauce", "pickles", "onion", "rolls"],
    "1. Preheat your grill to 225°F (110°C).\n2. Season the pork ribs with your favorite barbecue rub.\n3. Smoke the ribs for 3-4 hours or until tender.\n4. Baste the ribs with barbecue sauce and grill for an additional 2-3 minutes per side.\n5. Assemble the McRib sandwich with rolls, sliced pork ribs, pickles, and onions.\n6. Serve and enjoy!",
    "15 minutes",
    "240 minutes",
    "255 minutes",
    "4 servings",
    "https://www.allrecipes.com/thmb/atrHhTYudaxZ_dcVWSCmfumrN8M=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/6705731-chef-johns-copycat-mcrib-sandwich-Chef-John-1x1-1-07d309fbc05e46c3b3447c12b3ee182e.jpg"
    , [],
    []

  ),


  new Recipe(
    11,
    "Butter Chicken (Murgh Makhani)",
    ["boneless chicken", "yogurt", "tomato puree", "cream", "butter", "onion", "garlic", "ginger", "garam masala", "turmeric", "chili powder", "kasuri methi", "salt", "sugar"],
    "1. Marinate the chicken in yogurt, ginger, garlic, and spices for at least 30 minutes.\n2. Heat oil in a pan and cook the marinated chicken until browned.\n3. In a separate pan, melt butter and sauté onions until golden.\n4. Add tomato puree and cook until oil separates.\n5. Stir in cream, garam masala, turmeric, chili powder, kasuri methi, salt, and sugar.\n6. Add the cooked chicken to the tomato gravy and simmer for a few minutes.\n7. Serve hot with naan or rice.",
    "30 minutes",
    "40 minutes",
    "1 hour 10 minutes",
    "4 servings",
    "https://www.allrecipes.com/thmb/Zg6v6FjdKr6elbLSCZZqEwOGopc=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(929x0:931x2):format(webp)/5176729-90b369dd23734fde884d4245c975d027.jpg",
    ["Indian", "curry", "chicken"],
    []
  ),

  new Recipe(
    12,
    "Vegetable Biryani",
    ["basmati rice", "assorted vegetables (carrots, beans, potatoes, peas)", "onion", "yogurt", "ginger-garlic paste", "garam masala", "turmeric", "saffron", "milk", "ghee", "cashews", "raisins", "mint leaves"],
    "1. Soak basmati rice in water for 30 minutes.\n2. Parboil the assorted vegetables.\n3. In a pan, heat ghee and fry cashews and raisins until golden.\n4. In the same pan, sauté onions until caramelized.\n5. Add ginger-garlic paste, garam masala, turmeric, and sauté for a minute.\n6. Layer half of the parboiled vegetables, followed by half of the caramelized onions in a large pot.\n7. Add half-cooked rice on top of the layers.\n8. Repeat the layers with the remaining vegetables, onions, and rice.\n9. Mix saffron in warm milk and drizzle over the rice.\n10. Cover the pot and cook on low heat until the rice is fully cooked.\n11. Garnish with fried cashews, raisins, and mint leaves before serving.",
    "30 minutes",
    "45 minutes",
    "1 hour 15 minutes",
    "6 servings",
    "https://www.allrecipes.com/thmb/Fq6Wm475VjKUIUKrtCF9AoHJpwo=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/4433065-d3e6f9cb5dab49528665454b5c067ef2.jpg",
    ["Indian", "biryani", "vegetarian"],
    []
  ),

  new Recipe(
    13,
    "Palak Paneer",
    ["spinach", "paneer (Indian cottage cheese)", "onion", "tomato", "green chilies", "ginger", "garlic", "cream", "garam masala", "turmeric", "cumin", "coriander", "salt"],
    "1. Blanch spinach leaves in boiling water and blend to a smooth puree.\n2. Sauté onions, green chilies, ginger, and garlic in a pan until golden.\n3. Add tomatoes and cook until soft.\n4. Blend the onion-tomato mixture to make a smooth paste.\n5. In the same pan, add cumin, coriander, turmeric, and garam masala.\n6. Stir in the onion-tomato paste and cook for a few minutes.\n7. Add the spinach puree and cook until the mixture thickens.\n8. Add paneer cubes and cream, and simmer until the paneer is heated through.\n9. Serve hot with naan or rice.",
    "20 minutes",
    "25 minutes",
    "45 minutes",
    "4 servings",
    "https://www.allrecipes.com/thmb/E1OEF1wR5FSVWdcTIto-5CbI7jA=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(639x0:641x2):format(webp)/9170789-4b29dc9764144713baf0f9841761cdf4.jpg",
    ["Indian", "palak paneer", "vegetarian"],
    []
  ),

  new Recipe(
    14,
    "Chicken Tikka Masala",
    ["chicken thighs", "yogurt", "onion", "tomato", "ginger", "garlic", "garam masala", "turmeric", "paprika", "cumin", "coriander", "heavy cream", "butter", "cilantro", "lemon juice"],
    "1. Marinate chicken thighs in yogurt, ginger, garlic, and spices for at least 2 hours.\n2. Thread the marinated chicken onto skewers and grill until cooked.\n3. In a separate pan, sauté onions until translucent.\n4. Add tomatoes and cook until soft.\n5. Blend the onion-tomato mixture to make a smooth puree.\n6. In a saucepan, melt butter and add the puree along with garam masala, turmeric, paprika, cumin, coriander, and salt.\n7. Stir in heavy cream and let the sauce simmer.\n8. Add the grilled chicken tikka pieces to the sauce and cook until heated through.\n9. Garnish with chopped cilantro and a drizzle of lemon juice before serving.",
    "2 hours 15 minutes",
    "25 minutes",
    "2 hours 40 minutes",
    "4 servings",
    "https://www.allrecipes.com/thmb/RFPHsFhQnpmjelJttsPbFCIGfyQ=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/239867chef-johns-chicken-tikka-masala-ddmfs-3X4-0572-e02a25f8c7b745459a9106e9eb13de10.jpg",
    ["Indian", "chicken", "curry"],
    []
  ),

  new Recipe(
    15,
    "Dal Makhani",
    ["black lentils (urad dal)", "kidney beans (rajma)", "onion", "tomato", "ginger", "garlic", "ghee", "cream", "turmeric", "garam masala", "cumin", "coriander", "red chili powder", "kasuri methi", "butter", "cilantro"],
    "1. Soak black lentils and kidney beans overnight.\n2. Pressure cook the soaked lentils and beans until tender.\n3. In a pan, sauté onions until golden.\n4. Add ginger, garlic, tomatoes, and cook until the tomatoes are soft.\n5. Blend the onion-tomato mixture to make a smooth paste.\n6. In a separate pan, melt ghee and add cumin, coriander, turmeric, and red chili powder.\n7. Stir in the onion-tomato paste and cook until the ghee separates.\n8. Add the cooked lentils and beans to the pan and simmer.\n9. Add cream, garam masala, kasuri methi, and butter.\n10. Garnish with chopped cilantro before serving.",
    "8 hours (including soaking time)",
    "25 minutes",
    "8 hours 25 minutes",
    "6 servings",
    "https://www.allrecipes.com/thmb/Ta1NB4Vwu4xTQbTsMQkrwk0qZL4=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/1257894-dal-makhani-indian-lentils-tox-4x3-1-0c7d3e0dc3ea4d96ba7ba733a38c5225.jpg",
    [],
    []
  ),

  new Recipe(
    16,
    "Gulab Jamun",
    ["milk powder", "all-purpose flour", "ghee", "milk", "sugar", "water", "rose water", "cardamom pods", "saffron", "pistachios"],
    "1. Mix milk powder, all-purpose flour, and ghee to make a dough.\n2. Form small balls from the dough and ensure they are smooth.\n3. In a saucepan, heat oil or ghee for deep frying.\n4. Fry the dough balls until golden brown and set them aside.\n5. In a separate pan, combine sugar, water, rose water, crushed cardamom pods, and saffron.\n6. Boil the syrup until it reaches a sticky consistency.\n7. Add the fried dough balls (gulab jamuns) to the syrup and let them soak for a few hours.\n8. Serve garnished with chopped pistachios.",
    "20 minutes",
    "20 minutes",
    "40 minutes",
    "4 servings",
    "https://www.allrecipes.com/thmb/w3YQNuG0ns0CCBs1wB3EcEHb1rc=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/4481937-83d1d4d5bd234f16bcdb9c46d65dc7a8.jpg",
    [],
    []
  ),



  new Recipe(
    4,
    "Copycat Chipotle Chicken",
    ["chicken thighs", "adobo sauce", "lime juice", "garlic", "cumin"],
    "1. In a blender, combine adobo sauce, lime juice, garlic, and cumin.\n2. Blend until smooth to make the marinade.\n3. Marinate the chicken thighs in the sauce for at least 30 minutes.\n4. Grill the chicken thighs over medium-high heat until fully cooked.\n5. Serve the chicken with your favorite sides and toppings.",
    "10 minutes",
    "15 minutes",
    "25 minutes",
    "4 servings",
    "https://www.allrecipes.com/thmb/n2Fenryk3oLJOwTOfRaDsU-2awY=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/4626231-copycat-chipotle-chicken-Buckwheat-Queen-1x1-1-c20874b726da43c1b2178fd0da269050.jpg"
    ,
    [],
    []

  ),
  new Recipe(
    5,
    "Sweet Restaurant Slaw",
    ["cabbage", "carrots", "sugar", "vinegar", "olive oil"],
    "1. In a large bowl, combine shredded cabbage and grated carrots.\n2. In a separate bowl, whisk together sugar, vinegar, and olive oil.\n3. Pour the dressing over the cabbage mixture and toss to coat.\n4. Refrigerate the slaw for at least 30 minutes before serving.\n5. Serve as a side dish for various meals.",
    "15 minutes",
    "0 minutes",
    "15 minutes",
    "8 servings",
    "https://www.allrecipes.com/thmb/0Tu7-f99lDxWesR_l7irqFERUkQ=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/2276935-964361e5f2744588a497a697421e099a.jpg"
    ,
    [],
    []

  ),
  new Recipe(
    6,
    "Double Decker Tacos",
    ["ground beef", "taco seasoning", "tortillas", "cheese", "lettuce"],
    "1. In a skillet, cook the ground beef until browned.\n2. Add taco seasoning and water to the skillet and simmer until the mixture thickens.\n3. Warm the tortillas in a separate pan or microwave.\n4. Assemble the tacos by layering two tortillas together.\n5. Add the seasoned ground beef, cheese, lettuce, and any other toppings you like.\n6. Serve and enjoy your double-decker tacos!",
    "10 minutes",
    "15 minutes",
    "25 minutes",
    "6 servings",
    "https://www.allrecipes.com/thmb/j12Mhf8Fnz7PKjQ-az-MOsVNMQc=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/2266070-double-decker-tacos-DIZ-1x1-1-a831316d754c400bb12a1ee88ce2aa96.jpg"
    ,
    [],
    []

  ),


  new Recipe(
    7,
    "Classic Margherita Pizza",
    ["pizza dough", "tomato sauce", "fresh mozzarella", "fresh basil leaves", "olive oil", "salt", "black pepper"],
    "1. Preheat your oven to the highest temperature (usually 500°F/260°C).\n2. Roll out the pizza dough on a floured surface to your desired thickness.\n3. Transfer the dough to a pizza stone or a baking sheet.\n4. Spread a layer of tomato sauce over the dough.\n5. Tear the fresh mozzarella into pieces and distribute it over the sauce.\n6. Sprinkle some salt and black pepper over the pizza.\n7. Drizzle a little olive oil on top.\n8. Bake the pizza in the preheated oven for about 10-12 minutes or until the crust is golden and the cheese is bubbly and slightly browned.\n9. Remove from the oven, add fresh basil leaves, and let it cool slightly before slicing.\n10. Serve and enjoy your classic Margherita pizza!",
    "20 minutes",
    "10 minutes",
    "30 minutes",
    "4 servings",
    "https://www.allrecipes.com/thmb/naaa4AhwAhqchJFR0VguujptibM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(124x0:126x2):format(webp)/409654-59d48f48e202432d9fe55aa1be528e21.jpg",
    [],
    []
  ),
  new Recipe(
    8,
    "Creamy Garlic Butter Shrimp",
    ["shrimp", "butter", "garlic", "lemon juice", "heavy cream", "salt", "black pepper", "fresh parsley"],
    "1. In a large skillet, melt the butter over medium heat.\n2. Add minced garlic to the butter and sauté for about 1 minute until fragrant.\n3. Add the shrimp to the skillet and cook for 2-3 minutes on each side until they turn pink and opaque.\n4. Reduce the heat and add lemon juice, heavy cream, salt, and black pepper.\n5. Stir the mixture and let it simmer for 2-3 minutes until the sauce thickens slightly.\n6. Garnish with chopped fresh parsley.\n7. Serve the creamy garlic butter shrimp over rice, pasta, or with crusty bread.\n8. Enjoy your delicious and creamy shrimp dish!",
    "10 minutes",
    "10 minutes",
    "20 minutes",
    "4 servings",
    "https://www.allrecipes.com/thmb/iYdl_WT0Y-t_UGBc5OEorLSTQb0=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/7369994CreamyGarlicButterShrimpPastaTheDailyGourmet2x1-4d7634d86dff420d845d404cdfc50f62.jpg",
    [],
    []
  ),

  new Recipe(
    9,
    "Chicken Alfredo Pasta",
    ["fettuccine pasta", "chicken breast", "butter", "heavy cream", "garlic", "parmesan cheese", "salt", "black pepper", "parsley"],
    "1. Cook the fettuccine pasta according to package instructions.\n2. Season the chicken breast with salt and black pepper.\n3. In a large skillet, melt butter over medium heat.\n4. Add minced garlic and cook until fragrant.\n5. Add the chicken and cook until it's no longer pink.\n6. Pour in the heavy cream and bring it to a simmer.\n7. Stir in the grated parmesan cheese until the sauce thickens.\n8. Toss the cooked pasta in the Alfredo sauce.\n9. Serve hot, garnished with chopped parsley.",
    "15 minutes",
    "20 minutes",
    "35 minutes",
    "4 servings",
    "https://www.allrecipes.com/thmb/go6JERH5SLjsuP1GG4dxCVPuLjU=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/677213-6927ba9fe78f44089f6e67d6e8317ec9.jpg",
    [],
    []
  ),

  new Recipe(
    10,
    "Vegetable Stir-Fry",
    ["broccoli florets", "carrots", "bell peppers", "snap peas", "onion", "garlic", "soy sauce", "sesame oil", "cornstarch", "brown sugar", "ginger", "green onions", "sesame seeds"],
    "1. Heat some sesame oil in a wok or large skillet over medium-high heat.\n2. Add minced garlic and sliced ginger, and stir-fry for about 1 minute.\n3. Add broccoli florets, sliced carrots, bell peppers, and snap peas to the wok.\n4. In a small bowl, mix soy sauce, brown sugar, and cornstarch until smooth.\n5. Pour the sauce mixture over the vegetables and toss to coat evenly.\n6. Cook until the vegetables are crisp-tender.\n7. Sprinkle with sliced green onions and sesame seeds before serving.\n8. Serve the vegetable stir-fry over steamed rice.",
    "15 minutes",
    "10 minutes",
    "25 minutes",
    "4 servings",
    "https://www.allrecipes.com/thmb/39XR-8woBIGcYSHuz1sBEWmmJtg=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/222658-frozen-vegetable-stir-fry-4x3-1382-583b53fa0bcd4247920611ad431c14cb.jpg",
    [],
    []
  ),











];



// calculate the avg rating 
function calculateAverageRating(ratings) {
  if (ratings.length === 0) {
    return 0;
  }

  const sum = ratings.reduce((total, rating) => total + rating, 0);
  return sum / ratings.length;
}

//module ko export kr rhe
module.exports = {
  Recipe,
  sampleRecipes,
  calculateAverageRating,
};
