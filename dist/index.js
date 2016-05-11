'use strict';

var trace = function trace(msg) {
    return function (x) {
        console.log(msg, x);
        return x;
    };
};

var utils = {
    trace: trace
};

var effectsList = ['addClass', 'css', 'fadeIn', 'fadeOut', 'fadeTo', 'fadeToggle', 'hide', 'show', 'slideToggle', 'slideUp', 'toggle'];

var handlersList = ['bind', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'die', 'focus', 'focusout', 'keydown', 'keypress', 'keyup', 'live', 'load', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'on', 'resize', 'scroll', 'select', 'submit', 'unbind', 'unload'];

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