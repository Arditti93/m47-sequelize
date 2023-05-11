// import sequilize 
const { Sequelize } = require("sequelize") 

// initalise a new instance of the class sequelize
const connection = new Sequelize(process.env.MYSQL_URI)

// checks the connection URI to make sure there is a existing database to connect to
connection.authenticate()

console.log("DB connection is working")

module.exports = connection