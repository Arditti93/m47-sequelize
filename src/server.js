require("dotenv").config();

// import express package
const express = require("express") 

// import Book model
const Book = require("./books/model") 

//import book routes 
const bookRouter = require("./books/routes")

// define a port for our server to run on
const port = 5002

// store express package in variable called app
const app = express()

// server will expect JSON in the body of the requests and will send JSON back in the response once 
// a request is made
app.use(express.json()) 

// sync tables on our database 
// if the table doesn't already exist then create a new one
const syncTables = () => {
    Book.sync()
} 

app.use(bookRouter)

// req = request 
// res = response

// let json = {
//     "name" : "Alex"
// }


app.get("/health", (req, res) =>{
    res.status(200).json({message: "Server is running"})
})

app.listen(port, () => {
    // call sync tables function once our server is running
    syncTables()
    console.log("Server is listening")
})
