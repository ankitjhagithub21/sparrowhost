const mongoose = require('mongoose')


const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017/lms');
        console.log("Mongodb connected.")
    }catch(error){
        console.log(error.message)
    }
}


module.exports = connectDB