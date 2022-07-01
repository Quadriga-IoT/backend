const Tractor = require('../models/tractor')
const client = require('./mqttController')


const getTractors = async (req, res) => {
    try {
        const result = await Tractor.find({}).select({ _id: 0, __v: 0 });
        res.status(200).json({
            "success": true,
            "code": 200,
            "message": "Aracın bilgileri alındı.",
            "data": result
        })
    } catch (err) {
        console.log(err);
        res.status(404).json({
            "success": false,
            "code": 404,
            "message": "Aracın bilgileri bulunamadı.",
            "data": err
        })
    }
}


// const createTractor = (req,res) => {
//     // res.send('<h1>Hello</h1>');
//     if (req.err) {
//         res.json(err);
//     } else {
//         client.on('message', function (topic, message) {
//             // message is Buffer
//             console.log(message.toString())
//             client.end()
//           })
//         const tractor = Tractor.create({ //req.bodeyden değil de mqttden alacak verileri
//             battery0: req.body.battery0,
//             battery1: req.body.battery1,
//             location: req.body.location,
//             activeTask: req.body.activeTask,
//             workingTime:req.body.workingTime,
//             speed: req.body.speed
//         }, (err, tractor) => {
//             if(err) res.json(err)
//             else {
//                 res.status(200).json({
//                     "success": true,
//                     "code": 200,
//                     "message": "Database'e ekleme yapıldı.",
//                     "data": tractor
//                 })
//             }
//         })
//     }
// }

const socketdeneme = (req, res) => {
    res.render('socketio')
}

module.exports = {
    //createTractor,
    getTractors,
    socketdeneme
}