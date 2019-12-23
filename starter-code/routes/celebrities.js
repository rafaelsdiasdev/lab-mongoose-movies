const express = require('express')
const router = express.Router()
const Celebrity = require('../models/celebrity')

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(allTheCelebritiesFromDB => {
    // console.log('celebrities', allTheCelebritiesFromDB)
    res.render('celebrities/index',  { celebrities: allTheCelebritiesFromDB } );
  })
  .catch(error => {
    console.log('Error while getting the celebrities from the DB: ', error);
  })
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(theCelebritie => {
      res.render('celebrities/show', { celebrities: theCelebritie });
    })
    .catch(error => {
      console.log('Error while retrieving celebrities details: ', error);
    })
});

router.get('/celebritie/new/', (req, res, next) => {
  res.render("celebrities/new");
});

router.post('/celebrities/new', (req, res, next) => {
  const newCelebritie = new Celebrity(req.body)
  newCelebritie.save()
  .then((celebrities) => {
    res.redirect('/celebrities');
  })
  .catch(error => error, res.render('/celebrities/new'));
});

router.post('/celebrities/:id/', (req, res, next) => {
  const {id} = req.params;
  Celebrity.findByIdAndDelete(id)
  .then((celebrities) => {
    res.redirect('/celebrities');
  })  
  .catch((err) => console.log(err))
});

router.get("/celebrities/:id/edit", async (req, res, next) => {
  try {
    const celebrity = await Celebrity.findById(req.params.id);
    res.render("celebrities/edit", celebrity);
  } catch (err) {
    next(err);
  }
});

router.post("/celebrities/:id/edit", async (req, res, next) => {
  try {
    await Celebrity.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
