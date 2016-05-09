var _ = require('ramda');

var hide = _.curry(function(cb, elem) { 
    return elem.hide(cb);            
});

var show = _.curry(function(cb, elem) { 
    return elem.show(cb);            
});

module.exports = { 
    hide: hide,
    show: show
};
