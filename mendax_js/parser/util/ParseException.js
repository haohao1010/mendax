class ParseException extends Error {
    constructor(msg) { // msg: message to be displayed when an exception is thrown
        super(msg) // pass a message to the parent class
    }

    static fromToken(token) {
        return new ParseException(
            `Syntax Error, unexpected token ${token.getValue()}`
        )
    }
}

module.exports = ParseException
