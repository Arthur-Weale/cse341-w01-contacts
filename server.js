const express = require("express")
const app = express()
const contactRoutes = require("./routes/contactRoutes")
const bodyParser = require("body-parser")

app.use(express.json())
//app.use(bodyParser.json()) //With express.json, you do not need body parser,

//The code below will ensure our api work across sites
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT , DELETE, OPTIONS");
    next()
});

app.use("/", contactRoutes)

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log("Your app is listening at " + port)
})