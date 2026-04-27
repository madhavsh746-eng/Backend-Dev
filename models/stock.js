import mongoose from "mongoose";
const stockSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:100,
    },
    price:{
        type:Number,
        required:true,

    },
    quantity:{
        type:Number,
        required:true
    }
    
})
let stoke = mongoose.model("stoke",stockSchema);
export default stoke;