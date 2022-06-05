const router = require("express").Router();
const userController = require("../apis/user/userController");
const postController = require("../apis/post/postController");
const catController = require("../apis/categories/catController");
const multer = require("multer");
const path = require("path");
const storagedp=multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,"public/images/dp")
  },
  filename:function(req,file,cb){
    let extension = path.extname(file.originalname)
    const newname = req.body._id + "-" + "profile" + extension;
    cb(null,newname)
  }
})
const uploaddp=multer({storage: storagedp})
router.post("/listCategories", catController.listCategories)
router.post("/register",uploaddp.single("dpImage"),userController.register)

router.post('/login',userController.login)
// router.use(require('../common/usermiddleware'))
router.post("/addPost",postController.addPost)
router.post("/updatePassword",userController.updatePassword)

module.exports = router;
