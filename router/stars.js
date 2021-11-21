const express = require('express');
const router = express.Router();
const starsImagesControler = require('../constrollers/starsImages')

console.log(__dirname)
module.exports = router.get('/', starsImagesControler.getStarsImages)
module.exports = router.post('/post', starsImagesControler.addImages)
module.exports = router.get('/all', starsImagesControler.allImages)
module.exports = router.get('/search', starsImagesControler.searchByString)
module.exports = router.post('/edit', starsImagesControler.editImagesById)
module.exports = router.get('/getByPathAndName', starsImagesControler.getImagesByPathAndName)
module.exports = router.get('/delete', starsImagesControler.deleteImagesByName)