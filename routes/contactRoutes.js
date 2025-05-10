const express = require("express")
const  {getAllContacts} = require("../controller/contact")
const router = express.Router()

router.get("/getAll", async (req, res)=>{
    const response = await getAllContacts();
    console.log(response)
    res.status(200).json(response)
})


module.exports = router