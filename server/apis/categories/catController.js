const Category=require('./catModel')

exports.fetchCategory = (req,res)=>{
 Category.find()
    .then(data=>{
        res.json({
            "message":"All categories",
            "status":200,
            "success":true,
            data:data
        })
    })
    
}

exports.addCategory = (req,res)=>{
    if(req==undefined|| req.body==undefined|| 
        req.body.categoryName==undefined){
        
        res.json({
            "message":"Fill the Form",
            "status":400,
            "success":false
        })
    }else{
     Category.findOne({categoryName:req.body.categoryName})
     .exec()
        .then(async data=>{
            if(data!=null){                
                res.json({
                    "message":"Category with same name already exists",
                    "status":400,
                    "success":false
                })
            }else{
                let total = await Category.countDocuments();
                let categObj = new Category()
                categObj.categoryName = req.body.categoryName;
                categObj.categoryDescription = req.body.categoryDescription;

                categObj.categoryId = total+1
                categObj.save()
                .then(catg=>{
                    res.json({
                        "message":"category Added",
                        "status":200,
                        "success":true,
                        "data":catg
                    })
                })
                .catch(err=>{
                    res.json({
                        "message":"Error in Add category",
                        "status":500,
                        success:false,
                        error:String(err)
                    })
                })
            }
        })
    }
}

// exports.updateCategory = (req,res)=>{
//  Category.findOne({"_id":req.body._id})
//         .then(data=>{
//             if(data!=null){
//                 data.categoryName=req.body.categoryName;             
//                 data.save();
//                  res.json({
//                     "message":"category updated",
//                     "status":200,
//                     "success":true,
//                     "data":data,
//                     })
                    
//                 }else{
//                     res.json({
//                         "message":"no data updated",
//                         "status":200,
//                         "success":false,
//                         "data":[]
//                     })
//                 }
        
               
//             })
//             .catch(err=>{
//                 res.json({
//                     "message":"error occured",
//                     "status":500,
//                     "success":false,
//                     "data":[],5
//                     error:String(err)
//                 })
//             })
//         }
        
        
    
exports.deleteCategory = (req,res)=>{
    if(req.body._id==undefined||req.body._id==null){
        res.json({
            "message":"Please select a Category",
            "status":400,
            "success":false,
            })
    }
    else{
     Category.deleteOne({"_id":req.body._id})
        .then(data=>{
            res.json({
                "message":"catagory deleted",
                "status":200,
                "success":true,
                data:data
            })
            })
       .catch(err=>{
           res.json({
               "message":"error in delete",
               "status":500,
               "success":false,
               "error":String(err)
           })
       })     
    }
}