const express = require('express')

const app = express()

const port = process.argv.slice(2)[0]

app.listen(port, () => console.log(`Server Up on port ${port}`))