import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        const connn=await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to Database");

    }catch(err){
        console.log("Error connecting to MongoDB")
    }
}
export default connectDB;