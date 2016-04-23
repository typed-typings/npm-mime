/// <reference path="../bundle/main.d.ts" />
/// <reference path="../typings/main.d.ts" />

import mime = require('mime')
import assert = require('assert')

assert.equal(mime.lookup('foo.js'), 'application/javascript')

assert.equal(typeof mime.default_type, 'string')
assert.equal(typeof new mime.Mime().define, 'function')
