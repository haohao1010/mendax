class ASTNode {
    constructor(_parent, _type = null, _label = null) {
        this.children = []
        this.parent = _parent

        //key information
        this.lexeme = null
        this.type = _type
        this.label = _label
    }

    // Encapsulation, to avoid later changes to the data structure of children and so on,
    // the robustness of the program is still good

    getChild(index) {
        return this.children[index]
    }

    addChild(node) {
        this.children.push(node)
    }

    getLexeme() {
        return this.lexeme
    }

    // danger
    getChildren() {
        return this.children
    }
}

module.exports = ASTNode
