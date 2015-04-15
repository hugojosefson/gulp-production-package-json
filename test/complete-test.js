'use strict';
/* global describe,it */

var fs = require('fs');
var path = require('path');

var expect = require('chai').expect;

var produceProductionPackageJson = require('../lib/produce-production-package-json');

describe('complete', function () {
    it('should produce the expected package.json', function () {
        var input = fs.readFileSync(path.resolve(__dirname, 'package-input.json'), 'utf-8');
        var expected = fs.readFileSync(path.resolve(__dirname, 'package-output.json'), 'utf-8').replace(/\n$/, '');
        var actual = produceProductionPackageJson(input);
        expect(expected).to.equal(actual);
    });
});