const express = require('express');
const route = express.Router();
const user = require("../models/user");

route.post("/register",function(req,res){
    const newuser = new user({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : req.body.password
    
});


user.saveUser(newuser,function(err,user){
    if(err){
        res.json({state:false,msg:"dat not saved"});
    }
    if(user){
        res.json({state:true,msg:"data save sucessful"});
    }
});

});

route.post("/login",function(req,res){
      const login_email = req.body.email;
      const login_password = req.body.password;

      user.findByEmail(login_email,function(err,user){
          if(err) throw err;

          if(!user){
              res.json({state:false,msg:"No user found"});
          }
          user.checkpassword(login_password,user.password,function(err,match){
               if(err) throw err;

               if(match){
                    console.log("User and password matched");

               }
            
          });


      });

});

module.exports = route;