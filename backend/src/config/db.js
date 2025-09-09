const mongoose = require('mongoose');
const connectDB= async ()=>{
    try{
        await mongoose.connect(import.meta.env.MONGO_URI);
        console.log("Mongoose Connected");
    }
    catch(err){
        console.log("Mongoose Connection Error: ",err);
        process.exit(1);
    }
}
module.exports = connectDB;