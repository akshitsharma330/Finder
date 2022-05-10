var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, default: null },
  name: { type: String, default: "" , required: true },
  email: { type: String, default: "",required: true},
  password: { type: String, default: "" , required: true},
  tags: { type: Array, default: [],  },
  isBlocked: { type: Boolean, default: false },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date },
});
var user = (module.exports = mongoose.model("user", userSchema));

