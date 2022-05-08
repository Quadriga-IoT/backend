const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/', apiController.getTractors)
//router.post('/createTractor',apiController.createTractor);

module.exports = router;