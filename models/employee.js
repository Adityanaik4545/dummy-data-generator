const mongoose= require("mongoose");

const employeSchema=new mongoose.Schema({
    name:String,
    salary:Number,
    language:String,
    city:String,
    isManager:Boolean,
})
const Employee=mongoose.model("Employee",employeSchema);
module.exports=  Employee;