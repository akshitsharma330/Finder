const User = require('../apis/user/userModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;
exports.insertUser = ()=>{
    let data = {
        name:'Admin',
        email:'admin@gmail.com',
        password:'1234',
        userType:3
    } 
    const hash = bcrypt.hashSync('1234', saltRounds);
    data.password = hash
    User.countDocuments()
    .then(total=>{
        data.userId = total+1
        User.findOne({'email':'admin@gmail.com'})
        .then(use=>{ 
            if(use==null){
                let useObj = new User(data)
                useObj.save(data,err=>{
                    console.log("Admin saved")
                })
            }
        })
        .catch(err=>{
            console.log("Error in Save Admin")
        })
        
    })
}