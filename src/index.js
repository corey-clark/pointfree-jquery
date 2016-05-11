import $ from 'jquery';

const effectsList = [ 
    'hide',
    'show'
];

const buildEffects = (acc, x) => { 
    acc[x] = cb => elem => elem[x](cb);
    return acc;
};

const effects = effectsList.reduce(buildEffects, {});

module.exports = effects;
