const express= require('express');
const app = express();
const http=require('http');
const path = require('path');

const AdminRoutes = require('./routes/admin');
app.use('/', AdminRoutes);

app.listen(80,()=>{
    console.log("Listening on port 80");
})