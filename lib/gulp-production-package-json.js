'use strict';

var lazypipe = require('lazypipe');
var replace = require('gulp-replace');
var buffer = require('vinyl-buffer');

var regexes = require('./regexes');
var lookupKeyInOriginalPackageJson = require('./lookup-key-in-original-package-json');
var replaceWithProductionProperties = require('./replace-with-production-properties');

module.exports = lazypipe()
    .pipe(buffer)
    .pipe(replace, regexes.dollarParenthesis, lookupKeyInOriginalPackageJson)
    .pipe(replace, regexes.allOfIt, replaceWithProductionProperties);