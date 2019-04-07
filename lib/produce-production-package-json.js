'use strict';

var regexes = require('./regexes');
var lookupKeyInOriginalPackageJson = require('./lookup-key-in-original-package-json');
var replaceWithProductionProperties = require('./replace-with-production-properties');

function produceProductionPackageJson(inputString) {
    return inputString
        .replace(regexes.dollarParenthesis, lookupKeyInOriginalPackageJson)
        .replace(regexes.allOfIt, replaceWithProductionProperties);
}

module.exports = produceProductionPackageJson;