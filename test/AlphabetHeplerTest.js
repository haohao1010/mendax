const { assert } = require("chai")

const AlphabetHepler = require("../lexer/AlphabetHepler")

describe("test AlphabetHelper", () => {
    it("charCheck", () => {
        assert.equal(true, AlphabetHepler.isLetter("a"))
        assert.equal(true, AlphabetHepler.isLetter("b"))
        assert.equal(true, AlphabetHepler.isLetter("A"))
        assert.equal(false, AlphabetHepler.isLetter("0"))
        assert.equal(true, AlphabetHepler.isOperator("*"))
        assert.equal(true, AlphabetHepler.isOperator("+"))
        assert.equal(true, AlphabetHepler.isOperator(">"))
        assert.equal(true, AlphabetHepler.isOperator("="))
        assert.equal(false, AlphabetHepler.isOperator(" "))
        assert.equal(true, AlphabetHepler.isOperator("&"))
        assert.equal(true, AlphabetHepler.isNumber("1"))
        assert.equal(true, AlphabetHepler.isNumber("9"))
        assert.equal(false, AlphabetHepler.isNumber("_"))
        assert.equal(true, AlphabetHepler.isLiteral("_"))
        assert.equal(true, AlphabetHepler.isLiteral("a"))
        assert.equal(false, AlphabetHepler.isLiteral("*"))
    })
})

/*
Syntax Notes: 
There is no this object in the arrow function, 
and the this object used within its function body is the outer function object.
*/
