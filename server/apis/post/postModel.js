var mongoose = require("mongoose");
var postSchema = mongoose.Schema({
  u_Id: { type: mongoose.Schema.Types.ObjectId, default: null },
  title: { type: String, default: "", required: true },
  description: { type: String, default: "", required: true },
  cat_Id: { type: mongoose.Schema.Types.ObjectId, default: null },
  subCat_Id: { type: mongoose.Schema.Types.ObjectId, default: null },
  imgs: { type: Array, default: [] },
  createAt: { type: Date, default: Date.now() },
});
var post = (module.exports = mongoose.model("post", postSchema));
