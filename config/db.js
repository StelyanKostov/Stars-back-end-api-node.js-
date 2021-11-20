const config = require('./config');
const mongoose = require('mongoose');


module.exports = () => {
    mongoose.connect(config.dbURL)
    console.log('ready DB')

    require('../models/starsImages')
    let db = mongoose.connection;

    db.once('open', (err) => {
        if (err) {
            console.log(err)
        }

        console.log('mongo ready')
    })

    db.on('error', err => console.log('database error ' + err))
}