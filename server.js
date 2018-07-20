const express = require('express')
const compression = require('compression')


const app = express()
const port = 4000


app.use(compression())

app.get('/', (req, res) => res.sendFile(__dirname +'/index.html'))

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})