'use strict';

var jsonParse = require('./memoized-json-parse');

/**
 * Looks up the matched key with what its corresponding value is in the original package.json.
 * Replaces match with that value.
 *
 * For example:
 * <pre>
 *     {"version": "1", "description": "Version $(version) of this package."}
 * </pre>
 *
 * ...becomes:
 * <pre>
 *     {"version": "1", "description": "Version 1 of this package."}
 * </pre>
 */
function lookupKeyInOriginalPackageJson(match, p1, offset, originalPackageJson) {
    var pkg = jsonParse(originalPackageJson);
    return pkg[p1];
}

module.exports = lookupKeyInOriginalPackageJson;