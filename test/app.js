const express = require('express'),
    response = (req, res) => {
        res.json({msg: 'done'});
    };

console.log(JSON.stringify(process.env, null, 4));

module.exports = (urlCleaner) => express()
    .enable('strict routing')
    .use(urlCleaner())
    .get('/', response)
    .get('/path', response)
    .get('/path/more', response);
