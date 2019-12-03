const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.static(path.join(__dirname, 'build')))

app.get('/api/v1/hello', (req, res) => {
    res.json({ message: 'world' })
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})