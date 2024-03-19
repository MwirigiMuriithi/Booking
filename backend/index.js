const express = require('express')
const app = express()
const cookieParser = require("cookie-parser")
const dotenv = require ('dotenv').config()
const connection = require ('./db.js')
const authRoute = require( "./routes/auth.js")
const usersRoute= require ("./routes/users.js")
const  hotelsRoute = require ("./routes/hotels.js")
const roomsRoute = require ( "./routes/rooms.js")

connection()

//middlewares
app.use (express.json())
app.use(cookieParser)

//routes
app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/hotels", hotelsRoute)
app.use("/rooms", roomsRoute)

app.use((err, req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something fucked up"
    return res.status(errorStatus).json({
        success:false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Hello Motherfucker! fuck you and write some code!`))