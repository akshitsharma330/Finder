const postModel = require("./postModel");

exports.addPost = (req, res) => {
    if(
        req.body == undefined ||
      req.body.title == undefined ||
      req.body.title == "" ||
      req.body.description == undefined ||
      req.body.description == ""
    ){
        res.json(
            {
                msg : "Please fill the form",
                status : 204,
                success : false
            }
        )

    }
    else{
        let postObj=new postModel();
        postObj.title = req.body.title;
        
    }
}