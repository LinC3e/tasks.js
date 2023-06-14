const express = require("express")
const app = express()
require("dotenv").config()

const PORT = process.env.PORT

app.get("/", (req,res) => {
    res.send("Server on.")
})

app.listen(PORT, (err) => {
    if(err) throw new Error("Server error.")
    console.log("Server on in PORT :", PORT )
})