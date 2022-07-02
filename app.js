const express= require('express');
const app = express();
const http=require('http');
const path = require('path');
const bodyParser= require('body-parser');
const cors = require('cors');
var server = require('http').Server(app)
module.exports.io = require('socket.io')(server);

require('./config/DB_Connection');
require('./controllers/mqttController');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = require('./routes/router');



app.set('view engine', 'ejs'); //
app.set('views', __dirname + '/views'); //

server.listen(3000,()=>{
    console.log("Listening on port 3000");
})

app.use('/', router)