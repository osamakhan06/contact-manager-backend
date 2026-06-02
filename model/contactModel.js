const mongoose = require("mongoose")


const contactSchema = mongoose.Schema({   // schema defines that what is the structure of the data 
   
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name :{

        type:String,
        required:[true,"plz write your name "]
    },
    email:{
        type:String,
        required:[true,"enter your email"]
    },
    phone:{
        type:String,
        required:[true,"enter your phone number "]
    }
},{
    timestamp:true,
})


module.exports = mongoose.model("contact",contactSchema)  // contactSchema is the structure and contact is the model through this model we 
                                                        // enter the real data 