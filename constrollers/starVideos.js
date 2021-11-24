let starVideosModel = require('../models/starsVideos');


module.exports = {

    addVideo(req, res) {

        let name = req.body.name;
        let path = req.body.path;

        console.log(name + '-' + path)
        starVideosModel.create({ name: name, path: path })

        res.send("all is good")
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