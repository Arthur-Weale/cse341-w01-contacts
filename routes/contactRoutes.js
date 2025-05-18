const express = require("express")
const  {getAllContacts, getContact, createContact, updateContact, deleteContact} = require("../controller/contact")
const router = express.Router()
const { ObjectId } = require("mongodb")


router.use("/", require("./swagger"))

//TEST
router.get("/", (req, res) => {
    //#swagger.tags=["Hello Arthur"]
    res.send("Hello Arthur")
} )

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
        example: "http://localhost:3000/contacts/681e8f8941ec986c6cfbaa4b",
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

router.post("/create-contact",async(req, res)=>{
    try{
        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        }
        const response = await createContact(user);
        if(response){
            res.status(201).json({message: "Contact created successfully", id: response.toString() });
        }else{
            res.status(500).json(response.error || "Some error occured while updating the user");
        }
    }catch(err){
        console.log("Error occured", err.message)
        res.status(500).json({ error: "Server error: " + err.message });
    }
})

router.put("/contacts/:id", async (req, res)=>{
    try{
        const userId = req.params.id
        const userId_o = new ObjectId(userId);
        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        }

        const response = await updateContact(userId_o, user);
        console.log(response);
        if(response.modifiedCount > 0){
            res.status(200).json({message: "Contact updated succesfully"})
        }else{
            res.status(500).json(response.error || "Some error occured while updating the user")
        }
    }catch(err){
        console.log("Error occured", err.message)
        res.status(500).json({ error: "Server error: " + err.message })
    }
})


router.delete("/delete/:id", async (req, res)=> {
    try{
        const userId = req.params.id
        const userId_o = new ObjectId(userId)
        const response = await deleteContact(userId_o);
        if(response.deletedCount > 0){
            res.status(200).json({message: "Contact was deleted succefully"})
        }else{
            res.status(500).json({message: "Something went wrong, contact deletion was not a success"})
        }
    }catch(err){
        res.status(500).json({Error: "The was a problem" + err.message})
        }
})


module.exports = router