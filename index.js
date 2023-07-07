const express = require('express')
const path = require('path');
const app = express()

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    console.log("Just got a request!")
})

app.get('/status', (req, res) => {
    console.log("Just got a request!")
    res.send(200).json({"status": "main"})
})
app.listen(process.env.PORT || 3000)
