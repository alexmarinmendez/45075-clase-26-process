const express = require('express')
const { Command } = require('commander')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const program = new Command()

program
    .option('-p <port>', 'Puerto del servidor', 8080)

program.parse()

const port = program.opts().p

app.get('/', (req, res) => {
    res.send({
        port: process.env.PORT,
        mongoUrl: process.env.MONGO_URL,
        adminName: process.env.ADMIN_NAME,
        adminPassword: process.env.ADMIN_PASS
    })
})

app.listen(port, () => console.log(`Server Up on port ${port}`))