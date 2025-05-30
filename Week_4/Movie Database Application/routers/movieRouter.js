// routers/movieRouter.js
const express      = require('express');
const router       = express.Router();
const movieService = require('../service/movieService');

// GET /movies
// List all movies
router.get('/movies', async (req, res, next) => {
  try {
    const movies = await movieService.AllMovies();
    res.render('movies/allmovies', { movies });
  } catch (err) {
    next(err);
  }
});

// GET /add
// Show “Add Movie” form
router.get('/add', (req, res) => {
  res.render('movies/add');
});

// POST /movies
// Process “Add Movie” form, then redirect to list
router.post('/movies', async (req, res, next) => {
  try {
    const { title, director, genre, imdb_rating, release_year } = req.body;
    await movieService.addMovies({ title, director, genre, imdb_rating, release_year });
    res.redirect('/movies');
  } catch (err) {
    next(err);
  }
});

// GET /search
// - No ?genre and no ?title → show blank form
// - ?genre=… or ?title=… → perform the appropriate lookup
router.get('/search', async (req, res, next) => {
  const { genre, title } = req.query;

  // no search terms? render the blank form
  if (!genre && !title) {
    return res.render('movies/search', { query: {} });
  }

  try {
    let movies;
    if (genre) {
      movies = await movieService.AllMoviesByGenre(genre);
    } else {
      movies = await movieService.searchByTitle(title);
    }

    // pass back both fields so the results view can show which was used
    res.render('movies/search-results', {
      movies,
      query: { genre, title }
    });
  } catch (err) {
    next(err);
  }
});

// (Optional) retain this if you want direct genre-link support
router.get('/movies/:genre', async (req, res, next) => {
  try {
    const genre  = req.params.genre;
    const movies = await movieService.AllMoviesByGenre(genre);
    res.render('movies/search-results', {
      movies,
      query: { genre }
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
