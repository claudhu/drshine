var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/drshine/', function(req, res, next) {  //光澤診所的路由
  res.render('drshine', { title: '光澤心理遊戲' });
});

module.exports = router;
