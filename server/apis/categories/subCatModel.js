var mongoose = require('mongoose')
var subCatSchema = mongoose.Schema({
    subcategoryName: {type: 'string', required: true},
    subcategoryDescription: {type: 'string', required: true},
    categoryId: {   type: mongoose.Schema.Types.ObjectId,default:null,ref:'categories' }
    
})
var subCategory = (module.exports = mongoose.model("subCategorie", subCatSchema));
   


  
 
