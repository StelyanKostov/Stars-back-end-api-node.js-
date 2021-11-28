let starVideosModel = require('../models/starsVideos');


module.exports = {

    async addVideo(req, res) {

        const fs = require('fs')

        let name = req.body.name;
        let form = req.body.video;

        console.log(form)

        let count;
        await starVideosModel.count({ name: name }).then(a => count = a)
        count++;

        let path = __dirname + '\\..\\..\\stars\\Stars\\src\\assets\\videos\\' + name + count + ".mp4"
        let data = form.split(',')[1]

        let buff = Buffer.from(data, 'base64')

        fs.writeFileSync(path, buff);

        let pathForDb = `assets\\videos\\` + name + count + '.mp4'

        starVideosModel.create({ name: name, path: pathForDb })


    },

    getAllVideos(req, res) {


        starVideosModel.find().then(data => res.json(data))
    },

    getVideosByName(req, res) {

        starVideosModel.find({ name: req.query.name }).then(data => res.json(data));
    },
    searchByString(req, res) {

        starVideosModel.find().then(data => res.json(data.filter(x => x.name.toUpperCase().includes(req.query.string.toUpperCase()))));

    }
}