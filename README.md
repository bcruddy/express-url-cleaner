[![npm version](https://badge.fury.io/js/express-url-cleaner.svg)](https://badge.fury.io/js/express-url-cleaner)
[![Build Status](https://travis-ci.org/bcruddy/express-url-cleaner.svg?branch=master)](https://travis-ci.org/bcruddy/express-url-cleaner)

# express-url-cleaner
Express middleware for sanitizing urls with the [sanitize]() module

### Usage
- Requires node 6+
- `$ yarn install express-url-cleaner --save` or `$ npm install express-url-cleaner --save`

```javascript
const express = require('express'),
    urlCleaner = require('express-url-cleaner'),
    app = express();

app.use(urlCleaner());
```
