'use strict';

var jsonParse = require('./memoized-json-parse');

/**
 * Replaces original package.json content with that in the productionConfig.* properties,
 * then removes the productionConfig property.
 *
 * For example:
 * <pre>
 *     {
 *       "description": "Source code for this package",
 *       "productionConfig": {
 *         "description" : "Deployable artifact for this package"
 *       }
 *     }
 * </pre>
 *
 * ...becomes:
 * <pre>
 *     {
 *       "description" : "Deployable artifact for this package"
 *     }
 * </pre>
 */
function replaceWithProductionProperties(match, p1, offset, packageJson) {
    var pkg = jsonParse(packageJson);
    if (pkg.productionConfig) {
        for (var key in pkg.productionConfig) {
            if (pkg.productionConfig.hasOwnProperty(key)) {
                pkg[key] = pkg.productionConfig[key];
            }
        }
        delete pkg.productionConfig;
        return JSON.stringify(pkg, null, 2);
    } else {
        return packageJson;
    }
}

module.exports = replaceWithProductionProperties;