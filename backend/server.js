const express = require("express")
const app = express()
const morgan = require("morgan")
require("dotenv").config()

const { dbConnection } = require("./database/config")
const authRoutes = require("./routes/auth")

const PORT = process.env.PORT

// DB connection
dbConnection()

//Middlewares
app.use(express.json())
app.use(morgan("dev"))

// Routes
app.use('/api', authRoutes)

app.get("/", (req,res) => {
    res.send("Server on.")
})

app.listen(PORT, (err) => {
    if(err) throw new Error("Server error.")
    console.log("Server on in PORT :", PORT )
})