const express = require('express');
const Web3 = require('web3');
const dotenv = require('dotenv');
const port = 8111;
const router = require('./routes');
const sse = require('sse')
const cookieParser = require('cookie-parser');
const SSE = require('sse/lib/sse');
const app = express();

dotenv.config();
app.use(cookieParser());


app.use('/', router);

app.listen(port, ()=>{
    console.log('Server is listening ... on ', port);
})
