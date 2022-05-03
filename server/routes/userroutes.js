const router = require("express").Router();
const uinfoController = require("../apis/userinfo/uinfocontroller");
router.get("/", (req, res) => {
  res.send("Welcome to USERS");
});

router.post("/adduser", uinfoController.addUser);
router.post("/showuser", uinfoController.showuser);
// router.post("/updateuser", uinfoController.updateuser);
// router.post("/deleteuser", uinfoController.deleteuser);

module.exports = router;
