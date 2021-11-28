const mongoose = require('mongoose');

let schema = mongoose.Schema({
    name: String,
    path: String
})




module.exports = mongoose.model('StarsVideos', schema);