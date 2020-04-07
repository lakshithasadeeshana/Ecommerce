const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const newuserschema = new schema({
      firstname: {type:String, required:true},
      lastname : {type:String,required:true},
      email : {type:String,required:true},
      password :{type:String,required:true}

});



const user = module.exports = mongoose.model("user",newuserschema);

module.exports.saveUser = function(newuser,callback){
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(newuser.password, salt, function(err, hash) {
            newuser.password = hash;
            newuser.save(callback);
        });
    });
};

module.exports.findByEmail = function(login_email,callback){
    const quary = {email:login_email};
     user.findOne(quary);

};

module.exports.checkpassword = function(login_password,hash){

    bcrypt.compare(login_password, hash, function(err, result) {
       if(err) throw err;

       if(res){
           callback(null,res);
       }
    });
}