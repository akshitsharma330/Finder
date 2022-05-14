const router = require('express').Router()
const subcatController =require('../apis/categories/subCat')

router.get("/", (req, res) => {
    res.send("Welcome to Categories");
  });
  router.post('/addsubcat',subcatController.addSubcategory)
  router.post('/delsubcat',subcatController.deleteSubcategory)



  module.exports = router;             