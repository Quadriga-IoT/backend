const express= require('express');
const app = express();
const http=require('http');
const path = require('path');
const bodyParser= require('body-parser');
const cors = require('cors');
const io= require('./controllers/socketiocontroller');

require('./config/DB_Connection');
require('./controllers/mqttController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = require('./routes/router');
app.use(cors());


app.listen(3000,()=>{
    console.log("Listening on port 3000");
})

app.use('/', router)