const Enum = require("../commom/Enum")

module.exports = {
    KEYWORD: new Enum("KEYWORD", 1), // meta
    VARIABLE: new Enum("VARIABLE", 1),
    OPERATOR: new Enum("OPERATOR", 1),
    BRACKET: new Enum("BRACKET", 1),
    INTEGER: new Enum("INTEGER", 1),
    FLOAT: new Enum("FLOAT", 1),
    STRING: new Enum("STRING", 1),
    BOOLEAN: new Enum("BOOLEAN", 1),
}

/*
Syntax Notes: 
The so-called constructor is the ability to generate an object by this function.
*/
