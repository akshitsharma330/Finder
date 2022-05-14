const router = require("express").Router();
const userController = require("../apis/user/userController");
const postController = require("../apis/post/postController");
router.get("/", (req, res) => {
  res.send("Welcome to USERS");
});


router.post('/login',userController.login)
// router.use(require('../common/usermiddleware'))
router.post("/addPost",postController.addPost)

module.exports = router;
