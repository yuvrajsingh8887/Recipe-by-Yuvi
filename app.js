const express = require('express');
const app = express();
const path = require('path');
const { Recipe, sampleRecipes, calculateAverageRating } = require('./recipeModel');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//  homepage
app.get('/', (req, res) => {
  res.render('index', { recipes: sampleRecipes });
});

// Appetizers page
app.get('/appetizers', (req, res) => {
  res.render('appetizers');
});

//Main Courses page
app.get('/main-courses', (req, res) => {
  res.render('main-courses');
});

//Desserts page
app.get('/desserts', (req, res) => {
  res.render('desserts');
});

//  route to handle the search query
app.get('/search', (req, res) => {
  const query = req.query.query.toLowerCase();

  const searchResults = sampleRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(query) ||
    recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(query))
  );

  res.render('search-results', { searchResults, query });
});


app.get('/recipe/:id', (req, res) => {
  const recipeId = parseInt(req.params.id);
  const recipe = sampleRecipes.find((recipe) => recipe.id === recipeId);

  if (!recipe) {
    return res.status(404).send('Recipe not found.');
  }

  const recipeUrl = `http://localhost:3000/recipe/${recipeId}`;
  res.render('recipe-detail', { recipe, recipeUrl,calculateAverageRating });
});




// Route for rating submission
app.post('/recipe/:id/rate', (req, res) => {
  const recipeId = parseInt(req.params.id);
  const { rating } = req.body;

  const recipe = sampleRecipes.find((recipe) => recipe.id === recipeId);

  if (!recipe) {
    return res.status(404).send('Recipe not found.');
  }

  recipe.ratings.push(parseInt(rating));

  res.redirect(`/recipe/${recipeId}`);
});

// Route for review submission
app.post('/recipe/:id/review', (req, res) => {
  const recipeId = parseInt(req.params.id);
  const { review } = req.body;

  const recipe = sampleRecipes.find((recipe) => recipe.id === recipeId);

  if (!recipe) {
    return res.status(404).send('Recipe not found.');
  }

  recipe.reviews.push(review);

  res.redirect(`/recipe/${recipeId}`);
});


// add rating to recipe
app.post('/recipe/:id/add-rating', (req, res) => {
  const recipeId = parseInt(req.params.id);
  const { rating } = req.body;

  const recipe = sampleRecipes.find((recipe) => recipe.id === recipeId);
  if (!recipe) {
    return res.status(404).send('Recipe not found.');
  }

  const parsedRating = parseInt(rating);
//rating 1 se 5 ke beech mai hi aai
  if (isNaN(parsedRating) || parsedRating < 1 || parsedRating > 5) {
    return res.status(400).send('Invalid rating. Please select a rating between 1 and 5.');
  }

  recipe.ratings.push(parsedRating);

  res.redirect(`/recipe/${recipeId}`);
});

// Route add review to recipe
app.post('/recipe/:id/add-review', (req, res) => {
  const recipeId = parseInt(req.params.id);
  const { review } = req.body;

  const recipe = sampleRecipes.find((recipe) => recipe.id === recipeId);
  if (!recipe) {
    return res.status(404).send('Recipe not found.');
  }

  recipe.reviews.push(review);

  res.redirect(`/recipe/${recipeId}`);
});



// add recipe to fav
app.post('/recipe/:id/add-favorite', (req, res) => {
  const recipeId = parseInt(req.params.id);
  const existingFavorites = req.cookies.favorites || [];

  // Check if the recipe is already in favorites
  if (!existingFavorites.includes(recipeId)) {
    existingFavorites.push(recipeId);
    res.cookie('favorites', existingFavorites, { maxAge: 3600000 }); 
  }

  res.redirect(`/recipe/${recipeId}`); 
});

// remove recipe from fav
app.post('/recipe/:id/favorite', (req, res) => {
  const recipeId = parseInt(req.params.id);
  const existingFavorites = req.cookies.favorites || [];

  // Check if the recipe is already in favorites
  const index = existingFavorites.indexOf(recipeId);
  if (index === -1) {
    existingFavorites.push(recipeId);
  } else {
    existingFavorites.splice(index, 1);
  }

  res.cookie('favorites', existingFavorites, { maxAge: 3600000 }); // Set the cookie to expire after 1 hour (optional)

  res.redirect(`/recipe/${recipeId}`); 
});




app.post('/recipe/:id/remove-favorite', (req, res) => {
  const recipeId = parseInt(req.params.id);
  const existingFavorites = req.cookies.favorites || [];

  // Check if the recipe is already in favorites
  const index = existingFavorites.indexOf(recipeId);
  if (index !== -1) {
    // If recipe is found, remove it from favorites
    existingFavorites.splice(index, 1);
    res.cookie('favorites', existingFavorites, { maxAge: 3600000 }); // Set the cookie to expire after 1 hour (optional)
  }

  res.redirect('/my-favorites'); // Redirect back to the "My Favorites" page
});



app.get('/my-favorites', (req, res) => {
  const userFavorites = req.cookies.favorites || [];
  const favoriteRecipes = sampleRecipes.filter((recipe) => userFavorites.includes(recipe.id));

  res.render('my-favorites', { favoriteRecipes });
});



const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
