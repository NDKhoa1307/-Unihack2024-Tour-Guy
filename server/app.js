const express = require('express');
const app = express()

const port = 8080

app.get('/api/hello', (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`App is live at http://localhost:${port}/api/hello`)
})