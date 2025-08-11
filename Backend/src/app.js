const express = require('express');
const app = express();



app.get('/', (req,res) => {
    res.send('Jai Shree Shyam')
})
module.exports = app;