# has-termux-api

[![NPM Version](https://img.shields.io/npm/v/has-termux-api.svg)](https://www.npmjs.com/package/has-termux-api)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Node module to check if termux-api is installed

## Install

    $ npm install --save has-termux-api

It works well with the [termux](https://github.com/roccomuso/termux) node module.

## Usage

```javascript
const hasTermux = require('has-termux-api')

hasTermux().then(function () {
  // yeah
}).catch(function () {
  // nope
})
```

## Sync usage

```javascript
const hasTermux = require('has-termux-api')

if (hasTermux.sync()) {
  // ...  
} else {
  // install it: apt install termux-api
}
```

# Author

Rocco Musolino ([@roccomuso](https://twitter.com/roccomuso))

# License

MIT
