const {initdb} = require("../model/connectdb")


const getData = async () => {
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

getData()

module.exports = {getData};