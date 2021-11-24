const express = require('express');
const apiRouter = require('./router');
const config = require('./config/config');
const cors = require('cors');
const db = require('./config/db')

db().then(() => {

    let app = express();
    require('./config/express')(app)
    app.use(cors({
        origin: config.origin,
        credentials: true
    }));
    app.use('/api', apiRouter);

    app.listen(config.port)
    console.log('ready')
})