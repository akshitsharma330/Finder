var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
  user_Id: { type: mongoose.Schema.Types.ObjectId, default: null },
  //0 for user, 1 for afdmin
  uType : {type: 'number', default: 0},
  name: { type: String, default: "" ,},
  email: { type: String, default: ""},
  password: { type: String, default: "" },
  tags: { type: Array, default: [],  },
  isBlocked: { type: Boolean, default: false },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date },
});
var user = (module.exports = mongoose.model("user", userSchema));

