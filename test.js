let chai = require('chai');
const { it } = require('mocha');
const romanNumeral = require("./services");
var assert = chai.assert;

describe("GET ROMAN NUMERAL", ()=> {
    it('should get roman numeral for a single digit number',()=> {
        assert.equal(romanNumeral(1), 'I', '1 should be "I"')
        assert.equal(romanNumeral(4), 'IV', '4 should be "IV"')
        assert.equal(romanNumeral(5), 'V', '5 should be "V"')
        assert.equal(romanNumeral(9), 'IX', '9 should be "IX"')
    }),
    it('should get roman numeral for a double digit number',()=> {
        assert.equal(romanNumeral(13), 'XIII', '13 should be "XIII"')
        assert.equal(romanNumeral(42), 'XLII', '42 should be "XLII"')
        assert.equal(romanNumeral(55), 'LV', '55 should be "LV"')
        assert.equal(romanNumeral(98), 'XCVIII', '98 should be "XCVIII"')
    }),
    it('should get null for invalid input',()=> {
        assert.equal(romanNumeral("abcdef"), null, 'abcdef should return "null"')
        assert.equal(romanNumeral("!@34ac"), null, '!@34ac should return "null"')
    })
})