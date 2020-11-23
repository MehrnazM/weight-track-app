var express = require('express');
var bodyParser = require('body-parser')

var router = express.Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended: true,
}))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    info : 'Node.Js, Express, and Postgres API'
  })
});

module.exports = router;
