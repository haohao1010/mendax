const Stmt = require("./Stmt")
const ASTNodeTypes = require("./ASTNodeTypes")
const { Block } = require("./ASTNodeTypes")

class Block extends Stmt {
    constructor(parent) {
        super(parent, ASTNodeTypes.Block, "block")
    }
}

module.exports = Block
