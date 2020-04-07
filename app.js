const express = require('express');
const app = express();
const path = require('path');
const user = require("./route/users");
const mongoose = require('mongoose');
const db = require("./config/database");
const bodyParser = require('body-parser');


var jsonParser = bodyParser.json()
 

var urlencodedParser = bodyParser.urlencoded({ extended: false })


const connection = mongoose.connect(db.database,{useNewUrlParser: true, useUnifiedTopology: true});
   if(connection){
       console.log("DB connected");
   }else{
       console.log("DB not connected");
   }

app.use("/user",user);


app.use("",(express.static(path.join(__dirname,"public"))));

app.listen(3000,function(){
    console.log("Server ON");
});
 
