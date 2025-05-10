const express = require("express")
const  {getAllContacts, getContact} = require("../controller/contact")
const router = express.Router()
const { ObjectId } = require("mongodb")

router.get("/contacts", async (req, res)=>{
    try{
        const response = await getAllContacts();
    console.log(response)
    res.status(200).json(response)
    console.log("Request successful")
    }catch(err){
        console.log("Error fetching contacts ", err.message)
    }
})


router.get("/", (req, res) => {
    res.json({
        message: "🧪 Sample ObjectIds for testing. Paste one of these IDs into the URL like /contacts/:id to fetch a specific contact.",
        example: "http://localhost:3000/getOne/681e8f8941ec986c6cfbaa4b",
        sampleIds: [
            { _id: "681e8f8941ec986c6cfbaa4b", name: "Liam Moyo" },
            { _id: "681e8f9f41ec986c6cfbaa4c", name: "Amahle Nkosi" },
            { _id: "681e8fb641ec986c6cfbaa4d", name: "Thabo Dlamini" },
            { _id: "681e8fcd41ec986c6cfbaa51", name: "Zanele Khumalo" },
            { _id: "681e8fdf41ec986c6cfbaa52", name: "Katlego Peters" }
        ]
    });
});


// 🧪 Sample ObjectIds for testing:
// '681e8f8941ec986c6cfbaa4b' // Liam Moyo
// '681e8f9f41ec986c6cfbaa4c' // Amahle Nkosi
// '681e8fb641ec986c6cfbaa4d' // Thabo Dlamini
// '681e8fcd41ec986c6cfbaa51' // Zanele Khumalo
// '681e8fdf41ec986c6cfbaa52' // Katlego Peters


router.get("/contacts/:id", async(req, res) => {
    try{
        const id = req.params.id
    const object_id = new ObjectId(id)
    const response = await getContact(object_id)
    res.status(200).json(response)
        console.log("Contact Request successful")
    }catch(err){
        console.log("Contact request failed", err.message)
    }
    
})


module.exports = router