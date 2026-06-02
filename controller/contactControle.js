const asyncHandler = require("express-async-handler")
const Contact = require("../model/contactModel")

const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({user_id:req.user.id})
    res.status(200).json(contacts)
})

const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const contact = await Contact.create({ name, email, phone,user_id:req.user.id})
    res.status(201).json(contact)
})

const specificContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }
    res.status(200).json(contact)
})

// const updateContact = asyncHandler(async (req, res) => {

//     const contact = await Contact.findById(req.params.id)
//     if(Contact.user.user_id.toString() !== req.user.id){
//         res.status(401)
//         throw new Error("only valid person update the contact")
//     }
//     if (!contact) {
//         res.status(404)
//         throw new Error("Contact not found")
//     }
//     const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     res.status(200).json(updated)
// })







const updateContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id)

    if (!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(401)
        throw new Error("Only the owner can update this contact")
    }

    const updated = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )

    res.status(200).json(updated)
})




// const deleteContact = asyncHandler(async (req, res) => {
//     const contact = await Contact.findById(req.params.id)
//     if (!contact) {
//         res.status(404)
//         throw new Error("Contact not found")
//     }
    
//     if(Contact.user.user_id.toString() !== req.user.id){
//         res.status(401)
//         throw new Error("only valid person update the contact")
//     }
//     await Contact.findByIdAndDelete(req.params.id)
//     res.status(200).json({ message: "Contact deleted", id: req.params.id })
    
// })



const deleteContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id)

    if (!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(401)
        throw new Error("Only the owner can delete this contact")
    }

    await Contact.findByIdAndDelete(req.params.id)

    res.status(200).json({
        message: "Contact deleted",
        id: req.params.id
    })
})



module.exports = { getContact, createContact, updateContact, deleteContact, specificContact }