var mongoose = require('mogoose');
var subCatSchema = mongoose.Schema({
    name : {type: 'string', required: true},
    description : {type: 'string', required: true},
    catID : { type: mongoose.Schema.Types.ObjectId, default: null ,required: true}
    
})
var subCategory = (module.exports = mongoose.model("subCategorie", userSchema));
