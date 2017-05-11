[![npm version](https://badge.fury.io/js/no-slash.svg)](https://badge.fury.io/js/no-slash)
[![Build Status](https://travis-ci.org/bcruddy/no-slash.svg?branch=master)](https://travis-ci.org/bcruddy/no-slash)

# no-slash
Express middleware for forcing no trailing url slash via redirect.
Defaults to a 301, status code can be passed as an argument.

### Usage
- Requires node 6+
- `$ yarn install no-slash --save` or `$ npm install no-slash --save`

```javascript
const express = require('express'),
    noSlash = require('no-slash'),
    app = express();

app.use(noSlash());
```
