[![npm version](https://badge.fury.io/js/express-url-cleaner.svg)](https://badge.fury.io/js/express-url-cleaner)
[![Build Status](https://travis-ci.org/bcruddy/express-url-cleaner.svg?branch=master)](https://travis-ci.org/bcruddy/express-url-cleaner)

# express-url-cleaner
Express middleware for sanitizing urls with the [sanitizer](https://www.npmjs.com/package/sanitizer) module

### Usage
- node 6+ recommended, for node < 6 an ES5 module is available at `lib/es5.js`
- `$ yarn add express-url-cleaner` or `$ npm install express-url-cleaner --save`

```javascript
const express = require('express'),
    urlCleaner = require('express-url-cleaner'),
    app = express();

app.use(urlCleaner());
```

or for node < 6

```javascript
const express = require('express'),
    urlCleaner = require('express-url-cleaner/lib/es5'),
    app = express();

app.use(urlCleaner());
```

### Contributing
Fork the repo and pull requests are always welcome. Please reference an issue in all pull requests, create one for the feature or bug if it doesn't exist yet.

### Testing
- Tests are run with [jest](https://facebook.github.io/jest/) and 100% coverage is required.
- Linting with [eslint](http://eslint.org/).
