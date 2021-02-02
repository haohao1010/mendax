const ASTNode = require("./ASTNode")

class Stmt extends ASTNode {
    constructor(parent, type, label) {
        super(parent, type, label) // Passing parameters to the constructor of the parent class
    }
}

module.exports = Stmt
