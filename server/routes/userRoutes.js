const router = require("express").Router();
const userController = require("../apis/user/userController");
const postController = require("../apis/post/postController");
const catController = require("../apis/categories/catController");
const multer = require("multer");
const path = require("path");
const storage=multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,"public/images/dp")
  },
  filename:function(req,file,cb){
    let extension = path.extname(file.originalname)
    const newname = req.body._id + "-" + "profile" + extension;
    cb(null,newname)
  }
})
const upload=multer({storage: storage})
router.post("/listCategories", catController.listCategories)
router.post("/register",upload.single("profile"),userController.register)

router.post('/login',userController.login)
// router.use(require('../common/usermiddleware'))
router.post("/addPost",postController.addPost)
router.post("/updatePassword",userController.updatePassword)
router.post("/updateInfo",userController.updateInfo)

module.exports = router;
