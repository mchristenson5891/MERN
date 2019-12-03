const express = require('express')
const path = require('path')

const app = express()
require('./config/db');
const PORT = process.env.PORT || 8000

const usersController = require('./controllers/users.js');

app.use(express.static(path.join(__dirname, 'build')))

app.use('/auth', usersController)

app.get('/api/v1/hello', (req, res) => {
    res.json({ message: 'world' })
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})