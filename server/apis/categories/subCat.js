const subCategory=require('./subCatModel')

exports.addSubcategory=(req,res)=>{
    if(req.body==undefined||req.body.subcategoryName==undefined){
        res.json({
            "message":"Fill all details",
            "status":400,
            "success":false,
        })
    }else{
        subCategory.findOne({"subcategoryName":req.body.subcategoryName})
        .then(async data=>{
            if(data!=null){
                res.json({
                    "message":"data already existed",
                    "status":400,
                    "success":false,
                })
            }else{
                let counter=await subCategory.countDocuments()
                let subObj=new subCategory()
                subObj.subcategoryName=req.body.subcategoryName==undefined?"":req.body.subcategoryName
                subObj.subcategoryDescription=req.body.subcategoryDescription==undefined?"":req.body.subcategoryDescription
                subObj.categoryId = req.body.categoryId


                subObj.subcategoryId=counter+1
                subObj.save()
                .then(subct=>{
                    res.json({
                        "message":"Subcategory added",
                        "status":200,
                        "success":true,
                        "data":subct
                    })
                })
                .catch(err=>{
                    res.json({
                        "message":"error occured",
                        "status":500,
                        success:false,
                        "error":String(err)
                    })
                })

            }
        })
    }
}

// exports.updateSubcategory=(req,res)=>{
//     subCategory.findOne({'_id':req.body._id})
//     .then(data=>{
//         if(data!=null){
//             data.subcategoryName=req.body.subcategoryName
//             data.save()
//             res.json({
//                 "message":"data updated",
//                 "status":200,
//                 "success":true,
//                 "data":data
//             })
//         }else{
//             res.json({
//                 "message":"data not updated",
//                 "status":400,
//                 "success":false,
//             })
//         }
//     })
//     .catch(err=>{
//         res.json({
//             "message":"error in update",
//             "status":500,
//             "success":false,
//             "error":String(err)
//         })
//     })
// }

exports.deleteSubcategory=(req,res)=>{
    if(req.body._id==undefined||req.body._id==null){
        res.json({
            "message":'Fill the ID',
            "status":400,
            "success":false,
        })
    }else{
        subCategory.deleteOne({"_id":req.body._id})
        .then(data=>{
            res.json({
                "message":"Subcategory deleted",
                "status":200,
                "success":true,
            })
        })
        .catch(err=>{
            res.json({
                "message":"error occured",
                "status":500,
                "success":false,
                "error":String(err)
            })
        })

    }
    
}