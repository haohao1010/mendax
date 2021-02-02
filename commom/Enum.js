class Enum {
    constructor(type, value) {
        this.type = type
        this.value = value
    }
}

module.exports = Enum

/*  Syntax notes: javascript has no enumeration types.
 *
 *  Question: Why use enumeration types ？
 *
 *  If you use integers, the comparison is faster but still needs to be converted to strings.
 *  In other words, it would be too costly to use strings directly for comparison.
 *  So I use direct object comparisons here, that is, comparisons of addresses, which are straightforward comparisons of numbers in memory.
 *  If these objects are used frequently, they will always be stored in the CPU's L1 cache.
 */
