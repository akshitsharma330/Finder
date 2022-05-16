var mongoose = require('mogoose');
var catSchema = mongoose.Schema({
    name : {type: 'string', required: true},
    description : {type: 'string', required: true}
    
})
var category = (module.exports = mongoose.model("categorie", catSchema));
