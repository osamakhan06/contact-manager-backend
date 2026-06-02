const asyncHandler = require("express-async-handler")
const User = require("../model/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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



// const loginUser = asyncHandler(async(req,res)=>{
//     const {email,password} = req.body
//     if(!email || !password){
//         res.status(400)
//         throw new Error("cannot find the user")
//     }
//      const user = await User.findOne({email})

//      if(user && (await bcrypt.compare(password, user.password)))
//         const accessToken = jwt.sign(
//     {
//         user :{
//             username : user.userName,
//             emial:user.email,
//             id : user.id

//         },
//      process.env.ACCESS_TOKEN,
//      {expirein:1m}

//     },
//     )



//     res.status(200).json(accessToken)
// }
// else {
//     throw new Error("cannot found")
// }

// })


const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("Email and password are required");
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {

        const accessToken = jwt.sign(
            {
                user: {
                    username: user.userName,
                    email: user.email,
                    id: user.id
                }
            },
            process.env.ACCESS_TOKEN,
            {
                expiresIn: "10m"
            }
        );

        res.status(200).json({ accessToken });

    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

const currentUser = asyncHandler(async(req,res)=>{
    res.status(200).json(req.user)
})



module.exports = {registerUser,loginUser,currentUser}