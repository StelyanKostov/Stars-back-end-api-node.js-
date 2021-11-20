const express = require('express');
const router = express.Router();
const starsImagesControler = require('../constrollers/starsImages')

console.log(__dirname)
module.exports = router.get('/', starsImagesControler.getStarsImages)
module.exports = router.post('/post', starsImagesControler.addImages)