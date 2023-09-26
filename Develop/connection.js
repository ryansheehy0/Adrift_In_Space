const Sequelize = require("sequelize")
require("dotenv").config()

// Connection provided by JAWSDB_URL which is what Heroku uses
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: `127.0.0.1`,
    port: 3306,
    dialect: `mysql`
  })

module.exports = sequelize