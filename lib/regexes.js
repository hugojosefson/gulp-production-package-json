'use strict';

module.exports = {
    dollarParenthesis: (/\$\(([^)]+)\)/), // Catches for example 'version' in '$(version)'
    allOfIt: (/([^]+)/m)                 // Catches the entire file
};