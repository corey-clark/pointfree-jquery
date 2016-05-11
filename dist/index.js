'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_ramda2.default);

var similarMethods = ['hide', 'show'];

var build = function build(acc, x) {
    acc[x] = function (cb) {
        return function (elem) {
            return elem[x](cb);
        };
    };
    return acc;
};

var api = similarMethods.reduce(build, {});

module.exports = api;