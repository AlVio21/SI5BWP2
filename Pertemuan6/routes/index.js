var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/post', (req, res) => {
  res.render('post');
});


router.get('/contact', (req, res) => {
  res.render('contact');
});

module.exports = router;
