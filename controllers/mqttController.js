// const mqtt = require('mqtt');
// const mongoose= require('mongoose');

// const host = 'localhost'
// const port = '80'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
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

const mqtt = require('mqtt');
// const client = mqtt.connect('mqtt://127.0.0.1:1883') // id 
const client = mqtt.connect('mqtt://164.92.130.208:1883') //ip
const topic = 'tractor';
const Tractor = require('../models/tractor')

client.on('connect', function () {
  console.log("mqtt connection succesfull: " + client.connected);
  client.subscribe(topic, function (err) {
    if (err) {
      console.log("An error occured: " + err);
    }
  })
}, clientId)
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

client.on('message', function (topic, message, packet) {
  // message is Buffer
  const msg = JSON.parse(message);
  msg.date = Date.now();
  tractor(msg); // her gelen yüz veride bir kaydet
  client.end();
})