const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`MongoDB connected: ${connect.connection.host} and ${connect.connection.name}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;


// const mongoose = require("mongoose")

// const connectDB = async (req,res)=>{
//     try {
//         const connect = await mongoose.connect(process.env.CONNECTION_STRING)
//         console.log("the connection is estiblish")
        
//     } catch (error) {
//         console.log(error)
        
//     }

// }

// module.exports = connectDB