const {parse, format} = require('url'),
    {sanitize} = require('sanitizer');

module.exports = () => (req, res, next) => {
    const url = parse(req.url),
        {pathname, search, path} = url;
    let cleanUrl;

    url.pathname = sanitize(decodeURI(pathname));
    url.search = search ? search.split('&').map(pair =>
        sanitize(decodeURI(pair))).join('&') : null;

    cleanUrl = format(url);

    if (cleanUrl === path) {
        return next();
    }

    res.redirect(301, cleanUrl);
};
