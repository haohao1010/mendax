// test simple_parser
const SimpleParser = require("./parser/SimpleParser")
const Lexer = require("./lexer/Lexer")
const arrayToGenerator = require("./common/arrayToGenerator")
const PeekTokenIterator = require("./parser/util/PeekTokenIterator")

const source = "1+2+3+4"
const lexer = new Lexer()
const tokens = lexer.analyse(arrayToGenerator([...source]))
const tokenIt = new PeekTokenIterator(arrayToGenerator(tokens))
const expr = SimpleParser.parse(tokenIt)
console.log(expr.print())
