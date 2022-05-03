var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, default: null },
  name: { type: String, default: "" },
  email: { type: String, default: "" },
  password: { type: String, default: "" },
  tags: { type: Array, default: [] },
  isBlocked: { type: Boolean, default: false },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date },
});
var user = (module.exports = mongoose.model("user", userSchema));
module.exports.get = function (callback, limit) {
  student.find(callback).limit(limit);
};
