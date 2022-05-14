const mongoose=require('mongoose')
const categorySchema=mongoose.Schema({
    categoryId:{type:Number,default:0},
    categoryName:{type:String,default:""},
    categoryDescription:{type:String,default:""},

   isblocked:{type:Boolean,default:false},

})
var cate=module.exports=mongoose.model('cate',categorySchema)