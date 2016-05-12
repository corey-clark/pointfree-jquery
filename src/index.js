const effectsList = [ 
    'addClass',
    'css',
    'fadeIn',
    'fadeOut',
    'fadeTo',
    'fadeToggle',
    'hide',
    'removeClass',
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

const trace = msg => x => { 
    console.log(msg, x);
    return x;
};

const compose = (fn, ...rest) => 
    rest.length === 0 ? fn : (...args) => fn(compose(...rest)(...args));

const map = fn => elem => elem.map(fn);

const utils = { 
    compose,
    map,
    trace
};

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


