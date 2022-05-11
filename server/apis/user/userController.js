const uinfo = require("../userinfo/uinfoModel");
const bcrypt = require("bcrypt");

const userModel = require("./userModel");
const salts = 10;
const SECRET = "finder";

exports.addUser = (req, res) => {
    if (
      req.body == undefined ||
      req.body.name == undefined ||
      req.body.name == "" ||
      req.body.email == undefined ||
      req.body.email == ""
    ) {
      res.json({
        msg: "Please fill the form",
        satus: 200,
        success: false,
      });
    } else {
      user
        .findOne({ email: req.body.email })
        .exec()
        .then((data) => {
          if (data != null) {
            res.json({
              msg: "User already exists",
              satus: 200,
              success: false,
            });
          } else {
            let uinfoObj = new uinfo();
            uinfoObj.name = req.body.name;
            uinfoObj.email = req.body.email;
            uinfoObj.gender = req.body.gender;
            uinfoObj.number = req.body.number;
            uinfoObj.state = req.body.state;
            uinfoObj.city = req.body.city;
            // uinfoObj.tags = req.body.gender;
  
            uinfoObj
              .save()
              .then((uobj) => {
                let userObj = new userModel();
                userObj.name = req.body.name;
                userObj.userId = uobj._id;
                userObj.password = req.body.name;
                userObj.email = req.body.email;
                // userObj.tags = req.body.
                userObj
                  .save()
                  .then((data) => {
                    res.json({
                      msg: "user Added",
                      status: 200,
                      success: true,
                      user: uobj,
                    });
                  })
                  .catch((err) => {
                    res.json({
                      msg: "Error while adding",
                      status: 500,
                      success: false,
                      error: String(err),
                    });
                  });
              })
              .catch((err) => {
                res.json({
                  msg: "Error while adding",
                  status: 500,
                  success: false,
                  error: String(err),
                });
              });
          }
        });
    }
  };
exports.login = (req,res)=>{
    User.findOne({'email':req.body.email})
    .then(uObj=>{
        if(uObj==null){
            res.json({
                "message":"Email-Password Not Match",
                "status":200,
                "success":false
            })
        }else{
            if(bcrypt.compareSync(req.body.password, uObj.password)){
                let payload = {
                    name:uObj.name,
                    email:uObj.email,
                    userType:uObj.userType,
                    studentId:uObj.studentId,
                    _id:uObj._id
                }
                let token = jwt.sign(payload,SECRET, { expiresIn: 60*60*24*365 })
                res.json({
                    "message":"Login Successfull",
                    "status":200,
                    "sucess":true,
                    "token":token
                })
            }else{
                res.json({
                    "message":"Email-Password Not Match",
                    "status":400,
                    "sucess":false
                })
            }
        }
        
    })
    .catch(err=>{
        console.log(err)
        res.json({
            "message":"Error Login API",
            "status":500,
            "sucess":false,
            "err":String(err)
        })
    })        
  }