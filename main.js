// Test entry procedure

const Token = require("./lexer/Token")
const arrayToGenerator = require("./commom/arrayToGenerator")
const PeekIterator = require("./commom/PeekIterator")

var it1 = new PeekIterator(arrayToGenerator([..."if abc"]))
var it2 = new PeekIterator(arrayToGenerator([..."true abc"]))

var token1 = Token.makeVarOrKeyword(it1)
var token2 = Token.makeVarOrKeyword(it2)
it1.next() // Read spaces in the stream
var token3 = Token.makeVarOrKeyword(it1)

console.log(token1)
