const similarMethods = [ 
    'hide',
    'show'
];

const build = (acc, x) => { 
    acc[x] = cb => elem => elem[x](cb);
    return acc;
};

const api = similarMethods.reduce(build, {});

export const { 
    hide,
    show
} = api;
