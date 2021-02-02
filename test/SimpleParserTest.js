const SimpleParser = require("../parser/SimpleParser")
const Lexer = require("../lexer/Lexer")
const arrayToGenerator = require("../commom/arrayToGenerator")
const PeekTokenIterator = require("../parser/util/PeekTokenIterator")
const { assert } = require("chai")

describe("test SimpleParser", () => {
    it("basic", () => {
        const source = "1+2+3"
        const lexer = new Lexer()
        const tokens = lexer.analyse(arrayToGenerator([...source]))
        const tokenIt = PeekTokenIterator(arrayToGenerator(tokens))
        const expr = SimpleParser.parse(tokenIt)
        
        assert.equal(expr.children.length, 2)
    })
})
