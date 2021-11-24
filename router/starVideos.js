const express = require('express');
const router = express.Router();
const starsImagesControler = require('../constrollers/starVideos')


module.exports = router.get('/get', starsImagesControler.getAllVideos)
module.exports = router.post('/add', starsImagesControler.addVideo)
module.exports = router.get('/getByName', starsImagesControler.getVideosByName)
module.exports = router.get('/searchByString', starsImagesControler.searchByString)