const getContact = (req,res)=>{
    res.status(200).send({message:"get all the contacts"})
}

const createContact = (req,res)=>{
    console.log(req.body)
    res.status(200).send({message:"Create the new  contact"})
}

const updateContact = (req,res)=>{
    res.status(200).send({message:`update the contact with the id  ${req.params.id}`}) // params = value taken from URL
}

const deleteContact = (req,res)=>{
    res.status(200).send({message:`delete the contact with the id ${req.params.id}`})
}

const specificContact = (req,res)=>{
    res.status(200).send({message:`get the specific contact with the id is ${req.params.id}`})
}



module.exports = {getContact,createContact,updateContact,deleteContact,specificContact}