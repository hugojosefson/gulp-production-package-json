'use strict';

var lazypipe = require('lazypipe');
var replace = require('gulp-replace');

var lookupKeyInOriginalPackageJson = require('./lookup-key-in-original-package-json');
var replaceWithProductionProperties = require('./replace-with-production-properties');

var dollarParenthesis = (/\$\(([^)]+)\)/); // Catches for example 'version' in '$(version)'
var allOfIt = (/([^]+)/m);                 // Catches the entire file

module.exports = lazypipe()
    .pipe(replace.bind(replace, dollarParenthesis, lookupKeyInOriginalPackageJson))
    .pipe(replace.bind(replace, allOfIt, replaceWithProductionProperties));
