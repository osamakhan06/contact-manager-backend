const express = require("express");
const app = express();

require("dotenv").config(); // config -> it is the function in the env which load the data from the env to the anothers files 

app.use(express.json()) //“Tell Express to automatically read JSON data from incoming requests and convert it into req.body.”

const port = process.env.PORT || 5000;
   
//  // app.get(path, callback)
// app.get("/api/contacts", (req, res) => {
//   //  res.send("get all the contacts");
//   res.status(200).json({message:"get all the contacts "}) // when in the form of the json format
// });

app.use("/api/contacts",require("./routes/contactRoute"))

app.listen(port, () => {
    console.log(`the port is running on ${port}`);
});
