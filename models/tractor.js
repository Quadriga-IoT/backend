const mongoose= require('mongoose');

const tractorSchema =mongoose.Schema({
    battery0:{
        type: Number
    },
    battery1:{
        type: Number
    },
    location:{
        type: String
    },
    activeTask:{
        type: String
    },
    workingTime:{
        type: Number
    },
    speed:{
        type: Number
    },
    date:{
        type: Date,
        default: _ => {
            return Date.now()
        }
    }
}, {collection: 'tractors'})

module.exports = mongoose.model('tractor', tractorSchema);