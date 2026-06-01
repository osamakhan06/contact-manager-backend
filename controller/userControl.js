const asyncHandler = require("express-async-handler")
const User = require("../model/userModel")
const bcrypt = require("bcrypt")

const registerUser = asyncHandler(async (req, res) => {

    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const userAvailable = await User.findOne({ email });

    if (userAvailable) {
        return res.status(400).json({
            message: "User already registered"
        });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        userName,
        email,
        password: hashPassword
    });

    res.status(201).json({
        id: newUser._id,
        userName: newUser.userName,
        email: newUser.email
    });
});



const loginUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"login the user"})

})

const currentUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"this is the current user"})
})



module.exports = {registerUser,loginUser,currentUser}