const mongoose = require("mongoose");
require('dotenv').config()

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.mongo_URI)
        console.log("database connected....")
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectDB;