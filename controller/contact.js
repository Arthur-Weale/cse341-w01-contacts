const { ObjectId } = require("mongodb");
const {initdb} = require("../model/connectdb")



const getAllContacts = async () => {
    try{
        const client = await initdb();
        const result = await client.db("contactDB").collection("contacts").find().toArray();
        console.log("Getting data was successful")
        console.log(result)
        return result
    }catch(err){
        console.log("Error fetching contacts:", err.message)
        process.exit(1)
    }
}

const getContact = async (requestedId) => {
    try{
        const client = await initdb()
        const result = await client.db("contactDB").collection("contacts").findOne({"_id":  requestedId})
        console.log(result)
        return result
    }catch(err){
        console.log("Error fetching contacts:", err.message)
        process.exit(1)
    }
}

const createContact = async (createdUser)=>{
    try{
        console.log("Creating User")
        const client = await initdb()
        const result = await client.db("contactDB").collection("contacts").insertOne(createdUser);
        console.log(result.insertedId)
        console.log("User Created")
        //console.log(result);
        return result.insertedId;
    }catch(err){
        console.log("Error creating contact", err.message);
        process.exit(1);
    }
}

const updateContact = async (userIdUpdate,contactUpdate)=>{
    try{
        
        const client = await initdb();
        console.log("Updating contact")
        const result = await client.db("contactDB").collection("contacts").updateOne({"_id": userIdUpdate},{$set: contactUpdate});
        console.log("contact updated succesfully")
        console.log(result);
        return result;
    }catch(err){
        console.log("Error updating contact", err.message);
        process.exit(1);
    }
}


const deleteContact = async (removeContact)=>{
    try{
        console.log("initialising client")
        const client = await initdb()
        console.log("Deleting record")
        const result = await client.db("contactDB").collection("contacts").deleteOne({"_id": removeContact})
        console.log("record deleted, operation was succesful")
        console.log(result)
        return result
    }catch(err){
        console.log("An error occured", err.message);
        process.exit(1)
    }
}

module.exports = {
    getAllContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};