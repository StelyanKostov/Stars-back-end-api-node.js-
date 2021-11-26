const starsImagesModel = require('../models/starsImages')
module.exports = {
    getStarsImages(req, res) {
        // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        // res.setHeader('Access-Control-Allow-Credentials', true);
        console.log(req.query.name)
        let name = req.query.name;
        starsImagesModel.find({ name: name }).then(images => {

            res.json(images)

        })

    },
    addImages(req, res) {

        let name = req.body.name;
        let path = req.body.path
        console.log(path)
        starsImagesModel.create({ name, path })

    },
    allImages(req, res) {

        starsImagesModel.find().then(data => res.json(data))
    },

    searchByString(req, res) {

        let string = req.query.string;

        console.log(string)

        starsImagesModel.find().then(data => {

            data = data.filter(x => x.name.toUpperCase().includes(string.toUpperCase()))
            res.json(data)
        })

    },
    editImagesById(req, res) {

        // assets/nina dobrev/nina dobrev.jpg
        let id = req.body.id || "61991e5015f7ac7c1b463703"
        let name = req.body.name || "Nina"
        let path = req.body.path || "path"

        console.log(id + name + path)
        starsImagesModel.findOne({ id: id }).then(images => {
            images.name = name
            images.path = path
            images.save()
            res.send("sucksess")
        })


    },

    getImagesByPathAndName(req, res) {

        console.log(req.query.name + req.query.path)
        starsImagesModel.findOne({ name: req.query.name, path: req.query.path }).then(image => res.json(image))

    },
    deleteImagesByName(req, res) {

        let name = req.query.name || '';

        console.log(name)
        starsImagesModel.deleteMany({ name: name }).then(data => res.send("all is good"));
    },

    async uploadImage(req, res) {

        const fs = require('fs')
        let name = req.body.name;
        let count;
        await starsImagesModel.count({ name: name }).then(a => count = a)
        count++;
        let form = req.body.file;
        let path = __dirname + '\\..\\..\\stars\\Stars\\src\\assets\\img\\' + name + count + ".jpg"
        let data = form.split(',')[1]
        let buff = Buffer.from(data, 'base64')
        fs.writeFileSync(path, buff);
        let pathForDb = `assets\\img\\` + name + count + '.jpg'
        starsImagesModel.create({ name: name, path: pathForDb })

    }
}