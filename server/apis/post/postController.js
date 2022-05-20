const postModel = require("./postModel");

exports.addPost = (req, res) => {
  if (
    
    req.body.title == undefined ||
    req.body.title == "" ||
    req.body.description == undefined ||
    req.body.description == ""
  ) {
    res.json({
      message: "Please fill the form",
      status: 204,
      success: false,
    });
  } else {
    let postObj = new postModel();
    postObj.user_Id = req.user._id;
    postObj.title = req.body.title;
    postObj.description = req.body.description;
    postObj.price = req.body.price;
    postObj.negotiable = req.body.negotiable;
    postObj.featured = req.body.featured;
    postObj.cat_Id = req.body.cat_Id;
    postObj.subCat_Id = req.body.subCat_Id;
    postObj.latitude = req.body.latitude;
    postObj.longitude = req.body.longitude;
    postObj.imgs = req.body.imgs;
    postObj
      .save()
      .then((data) => {
        res.json({
          message: "Post Added",
          status: 200,
          success: true,
          post: data,
        });
      })
      .catch((err) => {
        res.json({
          message: "Error while adding",
          status: 500,
          success: false,
          error: String(err),
        });
      });
  }
};


