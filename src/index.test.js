var pj = require('./index');
var expect = require('chai').expect;

describe('api object', function() { 
    it('Should export an object with props', () => { 
        expect(pj).to.be.an('object');
        expect(pj).to.have.property('show')
    });

    it('Props should all be methods', () => { 
        expect(pj).to.have.property('hide')
        .that.is.a('function');
    });
});
