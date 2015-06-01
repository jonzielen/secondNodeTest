var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://jonzielen:meow@ds041032.mongolab.com:41032/testdb');

var Schema = mongoose.Schema;

var usersSchema = new Schema({
  name: String
});

mongoose.model('users', usersSchema);

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
  // res.render('test', {
  //     bodyClass:'page test'
  // });
  mongoose.model('users').find(function(err, users) {
    //res.send(users);
    res.render('test', {
        bodyClass:'page test',
        usersList: users
    });
  });
});


module.exports = router;
