const router = require('express').Router();

const userController = require("../apis/user/userController");

router.post('/login',userController.login)
router.use(require('../common/adminmiddleware'))


router.post("/adduser", userController.addUser);
// router.post("/showuser", userController.showuser);


module.exports = router;