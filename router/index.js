const express = require('express');
const router = express.Router();
const stars = require('./stars')


router.use('/images', stars)

module.exports = router;