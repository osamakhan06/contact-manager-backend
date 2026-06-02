require("dotenv").config(); // config -> it is the function in the env which load the data from the env to the anothers files 
const express = require("express");
const errorHandler = require("./middleware/errorHandlers");
const connectDB = require("./config/connectdb");
const validateToken = require("./middleware/validateToken");
const app = express();



app.use(express.json()) //“Tell Express to automatically read JSON data from incoming requests and convert it into req.body.”

const port = process.env.PORT || 5000;
   
//  // app.get(path, callback)
// app.get("/api/contacts", (req, res) => {
//   //  res.send("get all the contacts");
//   res.status(200).json({message:"get all the contacts "}) // when in the form of the json format
// });

app.use("/api/contacts",require("./routes/contactRoute"))
app.use("/api/user",require("./routes/userRoute"))
app.use(errorHandler)

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});