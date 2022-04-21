const express = require('express');
const router = express.Router();

const denemecontroller=require('../controllers/adminController');

router.post('/verikaydetme',denemecontroller.deneme);
module.exports=router;