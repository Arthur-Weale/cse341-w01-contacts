const express = require("express")
const app = express()
const contactRoutes = require("./routes/contactRoutes")
const bodyParser = require("body-parser")

app.use(express.json())
//app.use(bodyParser.json()) //With express.json, you do not need body parser,
app.use("/", contactRoutes)

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log("Your app is listening at " + port)
})