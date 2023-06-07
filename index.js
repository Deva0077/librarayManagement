const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const Mongo_Url= "mongodb://localhost:27017/users";
const app = express();

app.get("/get",(request,response)=>{
response.send("App is working Good")
})


const port = 5000;
app.listen(port ,function(){
    console.log("Server is working on port",+ port)
})
strictQuery = false;
mongoose.connect(Mongo_Url,(err)=>{
    if(err){
        console.log("connection problem",err)
    }
    else{
        console.log("Mongodb connected Successfully......!")
    }
});