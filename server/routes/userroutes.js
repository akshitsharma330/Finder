const router = require("express").Router();
const uinfoController = require("../apis/userinfo/uinfoController");
router.get("/", (req, res) => {
  res.send("Welcome to USERS");
});

router.post("/adduser", uinfoController.addUser);
router.post("/showuser", uinfoController.showuser);
// router.post("/updateuser", uinfoController.updateuser);
// router.post("/deleteuser", uinfoController.deleteuser);
router.post('/login',uinfoController.login)

router.use(require('../common/adminmiddleware'))


module.exports = router;
