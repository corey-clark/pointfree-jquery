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

const handlers = handlersList.reduce(buildHandlers, {});

module.exports = handlers;
