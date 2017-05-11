const express = require('express'),
    urlCleaner = require('../lib'),
    response = (req, res) => {
        res.json({msg: 'done'});
    };

module.exports = () => express()
    .enable('strict routing')
    .use(urlCleaner())
    .get('/', response)
    .get('/path', response)
    .get('/path/more', response);
