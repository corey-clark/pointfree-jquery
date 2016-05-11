const effectsList = [ 
    'fadeIn',
    'fadeOut',
    'fadeTo',
    'fadeToggle',
    'hide',
    'show',
    'slideToggle',
    'slideUp',
    'toggle'
];

const buildEffects = (acc, x) => { 
    acc[x] = cb => elem => elem[x](cb);
    return acc;
};

const effects = effectsList.reduce(buildEffects, {});

module.exports = effects;
