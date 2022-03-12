const express = require('express');
const router = express.Router();

const denemecontroller=require('../controllers/adminController');

router.use('/',denemecontroller.deneme);

module.exports=router;