class AlphabetHepler {
    static ptnLetter = /^[a-zA-Z]$/
    static ptnNumber = /^[0-9]$/
    static ptnLiteral = /^[_a-zA-Z0-9]$/
    static ptnOperator = /^[+-\\*/><=!&|^%]$/

    static isLetter(c) {
        return AlphabetHepler.ptnLetter.test(c)
    }
    static isNumber(c) {
        return AlphabetHepler.ptnNumber.test(c)
    }
    static isLiteral(c) {
        return AlphabetHepler.ptnLiteral.test(c)
    }
    static isOperator(c) {
        return AlphabetHepler.ptnOperator.test(c)
    }
}

module.exports = AlphabetHepler

/*
Syntax Notes: 

(1) Static method calls are made directly on the class 
and cannot be made on instances of the class.

(2) As you know, the space allocated on the stack of a function is released at the end of the execution of the function, which raises the question: 
how to save the value of this variable in the function until the next call? The easiest way to think about this is to define a global variable, 
but defining it as a global variable has many disadvantages, the most obvious one being that it breaks the access range of the variable
(so that the variable defined in the function is not only under the control of the function).

(3) So there is a need for a data object that serves the entire class rather than a particular object, 
while aiming not to break the encapsulation of the class, i.e., requiring that this member be hidden inside the class and not visible to the outside.
*/
