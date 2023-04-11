const express = require('express')
const { Command } = require('commander')
const config = require('./config/config.js')
const { fork } = require('child_process')

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

app.get('/suma', (req, res) => {
    const hijo = fork('./operacion.js')
    hijo.on('message', data => {
        res.send(`El resultado de la operacion es ${data}`)
    })
})

app.listen(port, () => console.log(`Server Up on port ${port}`))