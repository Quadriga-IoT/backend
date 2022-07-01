// const socketio = require('socket.io');
// // const socket =io('http://164.92.130.208:8883');
      
// module.exports.listen=function(app){
//     io = socketio(app,{
//         cors: {
//             origin :"http://164.92.130.208:8883",
//             methods :["GET", "POST"]
//         }
//     });
//     io.on('connection', (socket) => {
//         console.log('connection');
//         socket.on('send message', (data) => {
//             console.log('new message' + data);
//     })
//         socket.on('disconnect', () =>{
//             console.log('disconnection' + socket.id)
//         })
//     });
// };

// module.exports.getIO = () => {
//     if (!io) {
//         throw new Error('Socket.io initiialize edilmedi');
//     }
//     return io;
// }


const socketIO = require('socket.io');
const io = socketIO('http://164.92.130.208:8883');

io.on('connection', (socket) => {
  socket.send('Welcome')
  console.log('connected ' + socket.id);

  socket.on('disconnect', () => {
    console.log('Disconnected ' + socket.id);
  });
});

module.exports.io;