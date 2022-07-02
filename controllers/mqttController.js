// const mqtt = require('mqtt');
// const mongoose= require('mongoose');

// const host = 'localhost'
// const port = '80'
// const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
// const connectUrl = `mqtt://${host}:${port}`
// const client = mqtt.connect(connectUrl, {
//   clientId,
//   clean: true,
//   connectTimeout: 4000,
//   username: 'emqx',
//   password: 'public',
//   reconnectPeriod: 1000,
// })
// const topic = '/tractor/mqtt'
// client.on('connect', () => {
//   console.log('Connected')
//   client.subscribe([topic], () => {
//     console.log(`Subscribe to topic '${topic}'`)
//   })
//   client.publish(topic, 'tractor deneme', { qos: 0, retain: false }, (error) => {
//     if (error) {
//       console.error(error)
//     }
//   })
// })
// client.on("error", () => {
//   console.log("MQTT bağlantı kurulamadı " + err);
// })
// client.on('message', (topic, payload) => {
//   console.log('Received Message:', topic, payload.toString())
// })

// module.exports = client.on;
//örnek mqtt verisi
// "battery0": 9,
// "battery1": 9,
// "location": "data.location",
// "activeTask": "data.activeTask",
// "workingTime": 70,
// "speed": 50,
// "date": ""

const env = require('../env')
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://164.92.130.208:8883', {username:env.MQTT_USERNAME, password:env.MQTT_PASSWORD}) // ipye bakalım
const topic = 'tractor';
const Tractor = require('../models/tractor')
const io = require('../app').io


client.on('connect', function () {
  console.log("mqtt connection succesfull: " + client.connected);
  client.subscribe(topic, function (err) {
    if (err) {
      console.log("An error occured: " + err);
    }
  })
})
client.on("error", (err) => {
  console.log("Mqtt connect unseccesfull: " + err);
})

const tractor = (data) => {
  new Tractor({
    battery0: data.battery0,
    battery1: data.battery1,
    location: data.location,
    activeTask: data.activeTask,
    workingTime:data.workingTime,
    speed: data.speed,
    date: data.date
}).save()
  .then(() => {
    console.log("Database'e ekleme yapıldı");
  }).catch(() => {
    console.log("Database'e ekleme yapılırken hata oluştu.");
  })
}
let count = 0;
let msg = "";

io.on('connection', (socket) => {
  console.log("socketio a user connected");
  socket.on('publish', function (data) {
    console.log('Publishing to '+ data.topic);
    client.publish(data.topic,data.payload);
  });
});
client.on('message', function (topic, payload, packet) {
  // message is Buffer
  msg = JSON.parse(payload);
  msg.date = Date.now();
  tractor(msg); // her gelen yüz veride bir kaydet
  io.sockets.emit('mqtt',
  {
    'topic':String(topic),
    'payload':JSON.stringify(msg)
  });
})
