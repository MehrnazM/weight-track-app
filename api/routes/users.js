var express = require('express');
const db = require("../queries")
const bodyParser = require('body-parser');
var router = express.Router();
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended: true,
}))
console.log("I am in user")
router.get('/',(req,res,next) => {
  res.json({
    info : 'Users'
  })
})
router.get('/:username/:password',db.getUserByUsernamePass)
router.get('/:id',db.getUserById)
router.post('/',db.createUser)
router.put('/:id',db.updateUser)
router.delete('/:id',db.deleteUser)
module.exports = router;
