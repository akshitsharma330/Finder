var mongoose = require("mongoose");
var postSchema = mongoose.Schema({
  user_Id: { type: mongoose.Schema.Types.ObjectId, default: null },
  title: { type: String, default: "", required: true },
  description: { type: String, default: "", required: true },
  price : { type: String, default: "0", required: true },
  negotiable: { type: Boolean, default: false, required: true},
  featured: { type : Boolean, default: false, required: true},
  cat_Id: { type: mongoose.Schema.Types.ObjectId, default: null },
  subCat_Id: { type: mongoose.Schema.Types.ObjectId, default: null },
  imgs: { type: Array, default: [String] },
  latitude: { type: String, default: "", required: true },
  longitude: { type: String, default: "", required: true },
  createAt: { type: Date, default: Date.now() },
});
var post = (module.exports = mongoose.model("post", postSchema));
