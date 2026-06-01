const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:[true,"enter the userName"]
    },
    email:{
        type:String,
        required:[true,"enter the email"]

    },
    password:{
        type:String,
        required:[true,"enter the password"]
    }

})


module.exports = mongoose.model("userModel",userSchema)