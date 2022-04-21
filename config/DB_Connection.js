const mongoose = require('mongoose')
const env = require('../env')

mongoose.connect(env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
 })
.then(() => console.log("Database connection successful."))
.catch(err => console.log("Database connection unsuccessful: " + err))