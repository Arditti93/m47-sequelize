const { DataTypes } = require("sequelize")

// import and run the connection file
const connection = require("../db/connection")

// creates the structure for a table called Books in our database
const Book = connection.define("Book", {
    // column called title in our books table
    title: {
        // title feilds must be a string
        type: DataTypes.STRING,
        // a title must be present for each book in the table 
        allowNull: false,
        // each book title in our database must be unique
        unique: true
    },
    // column called actor in our books table
    author:{
        type: DataTypes.STRING
    },
    // column called genre in our books table
    genre: {
        type: DataTypes.STRING
    }
})

// export our model for use outside of this file
module.exports = Book;