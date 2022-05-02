const express = require('express');
const router = express.Router();

const apicontroller=require('../controllers/apiController');

router.post('/verikaydetme',apicontroller.tractor_DB);
module.exports=router;