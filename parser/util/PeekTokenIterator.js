const PeekInterator = require("../../commom/PeekIterator")
const ParseException = require("../util/ParseException")

class PeekTokenInterator extends PeekInterator {
    constructor(it) {
        super(it)
    }

    nextMatch(value) {
        var token = this.next()
        if (token.getValue() !== value) {
            throw ParseException.fromToken(token)
        }
        return token
    }

    nextMatch_(type) {
        var token = this.next()
        if (token.getType() !== type) {
            throw ParseException.fromToken(token)
        }
        return token
    }
}

module.exports = PeekTokenInterator
