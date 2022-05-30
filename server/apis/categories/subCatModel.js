var mongoose = require('mongoose');
var subCatSchema = mongoose.Schema({
    name : {type: 'string', required: true},
    description : {type: 'string', required: true},
    cat_Id : { type: mongoose.Schema.Types.ObjectId, default: null ,required: true},
    createdAt: {type:"Date", default: Date.now()}

    
})
var subCategory = (module.exports = mongoose.model("subCategorie", subCatSchema));
