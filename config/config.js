const dotenv = require('dotenv')
const enviroment = 'DEVELOPMENT'

dotenv.config({
    path: enviroment === 'DEVELOPMENT'
        ? './.env.development'
        : './.env.production'
})

module.exports = {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL,
    adminName: process.env.ADMIN_NAME,
    adminPassword: process.env.ADMIN_PASS
}

