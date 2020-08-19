const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = 8000;;
const { connectDB } = require('./models');
connectDB();

//cac route
const userRoute = require('./router/users.router')
const bookRoute = require('./router/books.router')
//set up de xem body request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const cors = require('cors')

const headers = {
    'origin': '*'
}
app.use(cors(headers));
app.options('*', cors(headers));
app.get('/',(req,res)=>{
    res.send('<h1>api book store</h1>')
})
app.use('/api/books',bookRoute);
app.use('/api/users',userRoute);
app.listen(port,()=>{
    console.log(`da mo localhost:${port}`)
})
