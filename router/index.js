const express = require('express');
const router = express.Router();
const stars = require('./stars')
const starsVideos = require('./starVideos')



router.use('/images', stars)
router.use('/videos', starsVideos)


module.exports = router;