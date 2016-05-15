'use strict';

var handlersList = ['bind', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'die', 'focus', 'focusout', 'keydown', 'keypress', 'keyup', 'live', 'load', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'on', 'resize', 'scroll', 'select', 'submit', 'unbind', 'unload'];

var buildHandlers = function buildHandlers(acc, x) {
    acc[x] = function (evt, cb) {
        return function (elem) {
            return elem[x](evt, cb);
        };
    };
    return acc;
};

var handlers = handlersList.reduce(buildHandlers, {});

module.exports = handlers;