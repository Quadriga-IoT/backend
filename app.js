const express= require('express');
const app = express();
const http=require('http');
const path = require('path');
const router = require('./routes/admin')
const bodyParser=require('body-parser');
require('./config/DB_Connection');
require('./controllers/mqttController');

const AdminRoutes = require('./routes/admin');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(80,()=>{
    console.log("Listening on port 80");
})

app.use('/', router)