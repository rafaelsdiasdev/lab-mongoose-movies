const express = require('express')
const router = express.Router()
const Movies = require('../models/movies')

router.get('/movies', (req, res, next) => {
  Movies.find()
  .then(allTheMoviesFromDB => {
    res.render('movies/index',  { movies: allTheMoviesFromDB } );
  })
  .catch(error => {
    console.log('Error while getting the movies from the DB: ', error);
  })
});

router.get('/movies/:id', (req, res, next) => {
  Movies.findById(req.params.id)
    .then(theMovie => {
      res.render('movies/show', { movies: theMovie });
    })
    .catch(error => {
      console.log('Error while retrieving movies details: ', error);
    })
});

router.get('/movie/new', (req, res, next) => {
  res.render("movies/new");
});

router.post('/movie/new', (req, res, next) => {
  const newMovie = new Movies(req.body)
  newMovie.save()
  .then((movies) => {
    res.redirect('/movies');
  })
  .catch(error => error, res.render('/movies/new'));
});

router.post('/movies/:id/', (req, res, next) => {
  const {id} = req.params;
  Movies.findByIdAndDelete(id)
  .then((movies) => {
    res.redirect('/movies');
  })  
  .catch((err) => console.log(err))
});

router.get("/movies/:id/edit", async (req, res, next) => {
  try {
    const movie = await Movies.findById(req.params.id);
    res.render("movies/edit", movie);
  } catch (err) {
    next(err);
  }
});

router.post("/movies/:id/edit", async (req, res, next) => {
  try {
    await Movies.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
