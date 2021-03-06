const compose = (fn, ...rest) => 
    rest.length === 0 ? fn : (...args) => fn(compose(...rest)(...args));

const curry = (fn, ...args) =>
    fn.length <= args.length ? fn(...args) : (...more) => curry(fn, ...args, ...more);

const map = fn => elem => elem.map(fn);

const trace = msg => x => { 
    console.log(msg, x);
    return x;
};

module.exports = { 
    compose,
    curry,
    map,
    trace
};
