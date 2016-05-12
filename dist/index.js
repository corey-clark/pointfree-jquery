'use strict';

var effectsList = ['addClass', 'css', 'fadeIn', 'fadeOut', 'fadeTo', 'fadeToggle', 'hide', 'show', 'slideToggle', 'slideUp', 'toggle'];

var handlersList = ['bind', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'die', 'focus', 'focusout', 'keydown', 'keypress', 'keyup', 'live', 'load', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'on', 'resize', 'scroll', 'select', 'submit', 'unbind', 'unload'];

var trace = function trace(msg) {
    return function (x) {
        console.log(msg, x);
        return x;
    };
};

var compose = function compose(fn) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
    }

    return rest.length === 0 ? fn : function () {
        return fn(compose.apply(undefined, rest).apply(undefined, arguments));
    };
};

var utils = {
    trace: trace,
    compose: compose
};

var buildHandlers = function buildHandlers(acc, x) {
    acc[x] = function (evt, cb) {
        return function (elem) {
            return elem[x](evt, cb);
        };
    };
    return acc;
};

var buildEffects = function buildEffects(acc, x) {
    acc[x] = function (cb) {
        return function (elem) {
            return elem[x](cb);
        };
    };
    return acc;
};

var effects = effectsList.reduce(buildEffects, {});
var handlers = handlersList.reduce(buildHandlers, {});

var api = Object.assign({}, effects, handlers, utils);

module.exports = api;