'use strict';

var _ = require('lodash');

/**
 * Memoized version of JSON.parse.
 *
 * Useful for when you expect to parse the same JSON string over and over again...
 */
module.exports = _.memoize(JSON.parse);