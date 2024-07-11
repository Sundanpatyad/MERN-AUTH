const mongoose = require('mongoose');
 const connectDB = async() =>{
    try{
        const db = await mongoose.connect('mongodb://localhost:27017/30dayslogin');
         console.log("Database Connected Successfully")
    }catch(e){
        console.log(e);
    }
}

module.exports =  connectDB

