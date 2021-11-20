const starsImages = require('../models/starsImages')

module.exports = {
    getStarsImages(req, res) {
        // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        // res.setHeader('Access-Control-Allow-Credentials', true);
        console.log(req.query.name)
        let name = req.query.name;
        starsImages.find({ name: name }).then(images => {

            res.json(images)

        })

    },
    addImages(req, res) {

        let name = req.body.name;
        let path = req.body.path
        console.log(path)
        starsImages.create({ name, path })
        res.send("all good")
    }
}