var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FUCK YOU', condition: false, anyArray: [1,2,3] });
});

/* get route */
router.get('/test/:id', function(req, res, next) {
  res.render('test', {output: req.params.id});
});

/* post route */
router.post('/test/submit', function(req,res,next) {
  var id = req.body.id;
  res.redirect("/test/" + id);
});



module.exports = router;
