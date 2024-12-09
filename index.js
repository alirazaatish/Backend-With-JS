require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Please Login With Email and Ph No</h1>')
})

app.get('/instagram', (req, res)=>{
    res.send('<h1>Username : ali_rz_atish</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})