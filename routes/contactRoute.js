const express = require("express")
const router = express.Router()
const {getContact,createContact,updateContact,deleteContact,specificContact} = require('../controller/contactControle')
const validateToken = require("../middleware/validateToken")

// router.route("/").get((req,res)=>{
//     res.status(200).send({message:"get all the contacts"})
// })


router.use(validateToken)

// router.route("/").get(getContact)

// router.route("/").post(createContact)

// OR



 router.route("/").get(getContact).post(createContact)

// router.route("/:id").put(updateContact)

// router.route("/:id").delete(deleteContact)

// router.route("/:id").get(specificContact)

// OR


router.route("/:id").put(updateContact).delete(deleteContact).get(specificContact)




module.exports = router