const popCount = require('./popCount');
const assert = require('assert');

assert.equal(0, popCount(0));
assert.equal(1, popCount(1));
assert.equal(1, popCount(2));
assert.equal(3, popCount(19));

