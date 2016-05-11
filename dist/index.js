'use strict';

var effectsList = ['fadeIn', 'fadeOut', 'fadeTo', 'fadeToggle', 'hide', 'show', 'slideToggle', 'slideUp', 'toggle'];

var buildEffects = function buildEffects(acc, x) {
    acc[x] = function (cb) {
        return function (elem) {
            return elem[x](cb);
        };
    };
    return acc;
};

var effects = effectsList.reduce(buildEffects, {});

module.exports = effects;