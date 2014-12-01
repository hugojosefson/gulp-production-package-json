'use strict';

var lazypipe = require('lazypipe');
var replace = require('gulp-replace');
var buffer = require('vinyl-buffer');

var lookupKeyInOriginalPackageJson = require('./lookup-key-in-original-package-json');
var replaceWithProductionProperties = require('./replace-with-production-properties');

var dollarParenthesis = (/\$\(([^)]+)\)/); // Catches for example 'version' in '$(version)'
var allOfIt = (/([^]+)/m);                 // Catches the entire file

module.exports = lazypipe()
    .pipe(buffer)
    .pipe(replace, dollarParenthesis, lookupKeyInOriginalPackageJson)
    .pipe(replace, allOfIt, replaceWithProductionProperties);