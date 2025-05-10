const express = require("express")
const app = express()
const contactRoutes = require("./routes/contactRoutes")

app.use(express.json())
app.use("/", contactRoutes)

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log("Your app is listening at " + port)
})