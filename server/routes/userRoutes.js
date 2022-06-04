const router = require("express").Router();
const userController = require("../apis/user/userController");
const postController = require("../apis/post/postController");
const catController = require("../apis/categories/catController");
router.get("/", (req, res) => {
  res.send("Welcome to USERS");
});
router.post("/listCategories", catController.listCategories)
router.post("/register",userController.register)

router.post('/login',userController.login)
// router.use(require('../common/usermiddleware'))
router.post("/addPost",postController.addPost)

module.exports = router;
