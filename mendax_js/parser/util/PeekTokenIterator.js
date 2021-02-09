const PeekIterator = require("../../common/PeekIterator")
const ParseException = require("./ParseException")

class PeekTokenIterator extends PeekIterator {
    constructor(it) {
        super(it)
    }

    // match the value
    nextMatch(value) {
        const token = this.next() // method in the parent class

        if (token.getValue() !== value) {
            throw ParseException.fromToken(token)
        }

        return token
    }
    
    // match the type
    nextMatch_(type) {
        const token = this.next()

        if (token.getType() !== type) {
            throw ParseException.fromToken(token)
        }

        return token
    }
}

module.exports = PeekTokenIterator
