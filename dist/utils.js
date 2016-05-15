"use strict";

var compose = function compose(fn) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
    }

    return rest.length === 0 ? fn : function () {
        return fn(compose.apply(undefined, rest).apply(undefined, arguments));
    };
};

var curry = function curry(fn) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
    }

    return fn.length <= args.length ? f.apply(undefined, args) : function () {
        for (var _len3 = arguments.length, more = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            more[_key3] = arguments[_key3];
        }

        return curry.apply(undefined, [f].concat(args, more));
    };
};

var map = function map(fn) {
    return function (elem) {
        return elem.map(fn);
    };
};

var trace = function trace(msg) {
    return function (x) {
        console.log(msg, x);
        return x;
    };
};

module.exports = {
    compose: compose,
    curry: curry,
    map: map,
    trace: trace
};