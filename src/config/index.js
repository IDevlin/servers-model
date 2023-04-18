require('dotenv').config()


const config = {
   env: process.env.NODE_ENV,
   port: process.env.PORT,
   dbConnection: process.env.ENGINE_DB
}
//console.log(config.dbConnection)

module.exports = config


