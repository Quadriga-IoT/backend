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
    WorkingTime:{
        type: Number
    },
    Speed:{
        type: Number
    },
}, {collection: 'tractors'})

module.exports = mongoose.model('tractor', tractorSchema);