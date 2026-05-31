const asyncHandler = require("express-async-handler")


const getContact = asyncHandler( async(req,res)=>{     // use of the asyncHandlers so no need of the try catch 
    res.status(200).send({message:"get all the contacts"})
})

const createContact = asyncHandler(async(req,res)=>{
   //  console.log(req.body)
   const {name, email,phone}= req.body
   if(!name || !email || !phone ){
    res.status(400);
    throw new error("all field are mandatory")
   }
   
    res.status(200).send({message:"Create the new  contact"})
})

const updateContact =asyncHandler( async(req,res)=>{
    res.status(200).send({message:`update the contact with the id  ${req.params.id}`}) // params = value taken from URL
})

const deleteContact =  asyncHandler (async(req,res)=>{
    res.status(200).send({message:`delete the contact with the id ${req.params.id}`})
})

const specificContact = asyncHandler(async(req,res)=>{
    res.status(200).send({message:`get the specific contact with the id is ${req.params.id}`})
})



module.exports = {getContact,createContact,updateContact,deleteContact,specificContact}