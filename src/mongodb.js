const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignup").then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect")
})

const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    }
})