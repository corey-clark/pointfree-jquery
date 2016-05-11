const trace = msg => x => { 
    console.log(msg, x);
    return x;
};

const utils = { 
    trace
};
    
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

const handlersList = [ 
    'bind',
    'blur',
    'change',
    'click',
    'contextmenu',
    'dblclick',
    'die',
    'focus',
    'focusout',
    'keydown',
    'keypress',
    'keyup',
    'live',
    'load',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'on',
    'resize',
    'scroll',
    'select',
    'submit',
    'unbind',
    'unload'
];


const buildHandlers = (acc, x) => { 
    acc[x] = (evt, cb) => elem => elem[x](evt, cb);
    return acc;
};

const buildEffects = (acc, x) => { 
    acc[x] = cb => elem => elem[x](cb);
    return acc;
};

const effects = effectsList.reduce(buildEffects, {});
const handlers = handlersList.reduce(buildHandlers, {});

const api = Object.assign({}, effects, handlers, utils);

module.exports = api;


