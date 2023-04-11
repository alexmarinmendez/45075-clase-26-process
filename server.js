const express = require('express')
const { Command } = require('commander')
const config = require('./config/config.js')

const app = express()
const program = new Command()

program
    .option('-p <port>', 'Puerto del servidor', 8080)

program.parse()

const port = program.opts().p

app.get('/', (req, res) => {
    res.send({
        config
    })
})

app.listen(port, () => console.log(`Server Up on port ${port}`))