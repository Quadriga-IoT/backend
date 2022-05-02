const Tractor = require('../models/tractor')

const tractor_DB= (req,res) => {
    // res.send('<h1>Hello</h1>');
    if (req.err) {
        res.json(err);
    } else {
        const tractor = Tractor.create({
            battery0: req.body.battery0,
            battery1: req.body.battery1,
            location: req.body.location,
            activeTask: req.body.activeTask,
            WorkingTime:req.body.workingTime,
            Speed: req.body.speed
        }, (err, tractor) => {
            if(err) res.json(err)
            else {
                res.json(tractor)
            }
        })
    }
}

module.exports = {
    tractor_DB
}