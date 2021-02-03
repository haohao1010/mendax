const Token = require("./src/lexer/Token")
const Lexer = require("./src/lexer/Lexer")
const TokenType = require("./src/lexer/TokenType")
const arrayToGenerator = require("./src/common/arrayToGenerator")

function assertToken(token) {
    console.log(token.getValue())
    console.log(token.getType())
}

const source = "(a+b)^100.12==+100-20"
const lexer = new Lexer()
const tokens = lexer.analyse(arrayToGenerator([...source]))

console.log(tokens.length)

assertToken(tokens[0])
assertToken(tokens[1])
assertToken(tokens[2])
