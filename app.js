const express= require('express');
const app = express();
const http=require('http');
const path = require('path');
const router = require('./routes/admin')
require('./config/DB_Connection');

const AdminRoutes = require('./routes/admin');

// const Tractor = require('./models/tractor')


//         const tractor = Tractor.create({
//             battery0: 52,
//             battery1: 20,
//             location: "vhv",
//             activeTask:"req.body.activeTask",
//             WorkingTime:54,
//             Speed: 32
//         }, (err, tractor) => {
//             if(err) console.log(err);
//             else {
//                 console.log(tractor);
//             }
//         })


app.listen(80,()=>{
    console.log("Listening on port 80");
})

app.use('/', router)