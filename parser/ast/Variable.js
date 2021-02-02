const ASTNodeTypes = require("./ASTNodeTypes")

class Variable extends Factor {
    constructor(parent, it) {
        super(parent, it)
        // this.type = ASTNodeTypes.VARIABLE
        // this.typeLexeme = null
    }

    // setTypeLexeme(lexeme) {
    //     this.typeLexeme = lexeme
    // }

    // getTypeLexeme() {
    //     return this.typeLexeme
    // }
}

module.exports = Variable
