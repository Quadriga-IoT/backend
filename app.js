const express= require('express');
const app = express();
const http=require('http');
const path = require('path');
const bodyParser= require('body-parser');
const router = require('./routes/admin');

require('./config/DB_Connection');
require('./controllers/mqttController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const AdminRoutes = require('./routes/admin');



app.listen(80,()=>{
    console.log("Listening on port 80");
})

app.use('/', router)