var express = require('express');
const db = require("../queries")
const bodyParser = require('body-parser');
const { route } = require('./testAPI');
var router = express.Router();
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended:true,
}))
/* GET users listing. */
router.get('/',db.getUsers)
router.get('/:id',db.getUserById)
router.post('/',db.createUser)
router.put('/:id',db.updateUser)
router.delete('/:id',db.deleteUser)
module.exports = router;
