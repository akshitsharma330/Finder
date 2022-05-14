const uinfoModel = require("../userinfo/uinfoModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("./userModel");
const salts = 10;
const SECRET = "finder";
//for admin
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
      satus: 204,
      success: false,
    });
  } else {
    userModel
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
          let uinfoObj = new uinfoModel();
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

//for user
exports.register = (req, res) => {
  if (
    req.body == undefined ||
    req.body.name == undefined ||
    req.body.name == "" ||
    req.body.email == undefined ||
    req.body.email == "" ||
    req == undefined ||
    req.body.password == undefined ||
    req.body.password == ""
  ) {
    res.json({
      msg: "Please fill the form",
      satus: 204,
      success: false,
    });
  } else {
    userModel.findOne({ email: req.body.email }).then((udata) => {
      if (udata != null) {
        if (udata.isBlocked == true) {
          res.json({
            msg: "blocked",
            satus: 204,
            success: false,
          });
        } else {
          res.json({
            msg: "User already exists",
            satus: 200,
            success: false,
          });
        }
      } else {
        let uinfoObj = new uinfoModel();
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

//Login Api
exports.login = (req, res) => {
  if (
    req.body.email == undefined ||
    req.body.email == "" ||
    req.body.password == undefined ||
    req.body.password == ""
  ) {
    res.json({
      message: "Enter Email and Password",
      status: 200,
      success: false,
    });
  } else {
    userModel
      .findOne({ email: req.body.email })
      .then((uObj) => {
        if (uObj == null) {
          res.json({
            message: "Account not found",
            status: 200,
            success: false,
          });
        } else {
          if (uObj.isBlocked == true) {
            res.json({
              message: "Account blocked",
              status: 200,
              success: false,
            });
          } else {
            if (!bcrypt.compareSync(req.body.password, uObj.password)) {
              res.json({
                message: "Email-Password Not Match",
                status: 400,
                sucess: false,
              });
            } else {
              let payload = {
                _id: uObj._id,
                name: uObj.name,
                email: uObj.email,
                uType: uObj.uType,
                user_Id: uObj.user_Id,
              };
              let token = jwt.sign(payload, SECRET, {
                expiresIn: 60 * 60 * 24 * 365,
              });
              res.json({
                message: "Login Successfull",
                status: 200,
                success: true,
                token: token,
              });
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({
          message: "Error Login API",
          status: 500,
          success: false,
          err: String(err),
        });
      });
  }
};

//for admin
exports.block = (req, res) => {};
