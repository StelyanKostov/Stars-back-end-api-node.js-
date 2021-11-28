const mongoose = require('mongoose');

let schema = mongoose.Schema({
    name: String,
    path: String
});

// for (let index = 1; index < 14; index++) {

//     mongoose.model('StarsImages', schema).create({ name: "Maggie Q", path: `assets\\img\\maggie q${index}.jpg` })


// }
// mongoose.model('StarsImages', schema).create({ name: "Kendall Jenner", path: `assets\\kendall jenner\\kendall jenner.gif` })

module.exports = mongoose.model('StarsImages', schema);