var pj = require('./index');
var expect = require('chai').expect;

describe('api object', function() { 
    it('Should export an object with props', () => { 
        expect(pj).to.be.an('object')
        expect(Object.keys(pj)).to.have.length.above(0);
    });

    it('Props should all be methods', () => { 
        const checkProps = (x => expect(pj[x]).to.be.a('function'))
        Object.getOwnPropertyNames(pj).map(checkProps);
    });
});
