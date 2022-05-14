const router = require('express').Router()
const catController =require('../apis/categories/catController')

router.get("/", (req, res) => {
    res.send("Welcome to Categories");
  });
  router.post('/addcat',catController.addCategory)
  router.post('/dellcat',catController.deleteCategory)



  module.exports = router;             