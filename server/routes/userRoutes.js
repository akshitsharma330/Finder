const router = require("express").Router();
const userController = require("../apis/user/userController");
router.get("/", (req, res) => {
  res.send("Welcome to USERS");
});


router.post('/login',userController.login)
// router.use(require('../common/usermiddleware'))


module.exports = router;
