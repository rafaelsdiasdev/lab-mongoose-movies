const express = require('express');
const router  = express.Router();
// const Celebrity = require('../models/celebrity');
const celebritiesRoutes = require('./celebrities')
const moviesRoutes = require('./movies')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.use('/', celebritiesRoutes)
router.use('/', moviesRoutes)

module.exports = router;
