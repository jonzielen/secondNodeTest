var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      homepage: true,
      title: 'The best website ever!',
      bodyClass:'page homepage',
      jom: 'jom',
      second: 'test 33333'
     });
});

/* GET test page. */
router.get('/test', function(req, res, next) {
  res.render('test', {
      bodyClass:'page test'
  });
});


module.exports = router;
