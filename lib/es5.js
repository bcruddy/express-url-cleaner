var _url = require('url'),
    parse = _url.parse,
    format = _url.format,
    sanitize = require('sanitizer').sanitize;

module.exports = function () {
    return function (req, res, next) {
        var url = parse(req.url),
            pathname = url.pathname,
            search = url.search,
            path = url.path,
            cleanUrl;

        url.pathname = sanitize(decodeURI(pathname));
        url.search = search ? search.split('&').map(function (pair) {
            return sanitize(decodeURI(pair))
        }).join('&') : null;

        cleanUrl = format(url);

        if (cleanUrl === path) {
            return next();
        }

        res.redirect(301, cleanUrl);
    };
};
