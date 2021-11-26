const express = require('express');

module.exports = (app) => {

    app.use(express.json({ limit: '50mb' }));

    // app.use(express.static(path.resolve(__basedir, 'static')));

}