const uinfo = require("./uinfoModel");
const user = require("../user/userModel");

const bcrypt = require("bcrypt");

const salts = 10;
const SECRET = "finder";





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


exports.showuser = (req, res) => {
  uinfo
    .find()
    .then((data) => {
      res.json({
        msg: "All Users",
        status: 200,
        success: true,
        student: data,
      });
    })
    .catch((err) => {
      res.json({
        msg: "Error in API",
        status: 500,
        success: false,
        error: String(err),
      });
    });
};
