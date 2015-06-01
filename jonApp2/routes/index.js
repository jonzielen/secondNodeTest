var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      homepage: true,
      title: 'The best website ever!',
      bodyClass:'homepage',
      jom: 'second title',
      second: '33333'
     });
});

/* GET test page. */
router.get('/test', function(req, res, next) {
  res.render('test', {
      bodyClass:'test'
  });
});


module.exports = router;
