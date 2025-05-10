const express = require("express")
const  {getAllContacts, getContact} = require("../controller/contact")
const router = express.Router()
const { ObjectId } = require("mongodb")

router.get("/getAll", async (req, res)=>{
    try{
        const response = await getAllContacts();
    console.log(response)
    res.status(200).json(response)
    console.log("Request successful")
    }catch(err){
        console.log("Error fetching contacts ", err.message)
    }
    
})

router.get("/get", async(req, res) => {
    try{
        const id = "681e8fdf41ec986c6cfbaa52"
    const object_id = new ObjectId(id)
    const response = await getContact(object_id)
    res.status(200).json(response)
        console.log("Contact Request successful")
    }catch(err){
        console.log("Contact request failed", err.message)
    }
    
})


module.exports = router