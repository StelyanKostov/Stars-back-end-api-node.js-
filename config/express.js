const express = require('express');

module.exports = (app) => {

    app.use(express.json());

    // app.use(express.static(path.resolve(__basedir, 'static')));

}