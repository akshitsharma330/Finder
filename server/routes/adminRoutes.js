const router = require('express').Router();

const userController = require("../apis/user/userController");

router.post('/login',userController.AdminLogin)
router.use(require('../common/adminmiddleware'))

router.post("/countUsers", userController.countUsers);
router.post("/countAdmins", userController.countAdmins);
router.post("/countBlockedUsers", userController.countBlockedUsers);
router.post("/listUsers", userController.listUsers)
router.post("/deleteUser", userController.deleteUser)
router.post("/blockUser", userController.blockUser)
router.post("/unblockUser", userController.unblockUser)
router.post("/listBlockedUsers", userController.listBlockedUsers)






// router.post("/showuser", userController.showuser);


module.exports = router;