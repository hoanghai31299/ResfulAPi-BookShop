const express = require('express');

const app = express()
const port = 8080;

app.get('/',(req,res)=>{
    res.send('<h1>hello</h1>')
})

app.listen(port,()=>{
    console.log(`da mo localhost:${port}`)
})
