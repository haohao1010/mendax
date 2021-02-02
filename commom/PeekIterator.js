const Linkedlist = require("linkedlist")

const CACHE_SIZE = 10

class PeekIterator {
    constructor(it, endToken = null) {
        // Syntax for javascript to provide optional parameters
        this.it = it
        this.stackPutBacks = new Linkedlist() // Caching of the put-back queue
        this.queueCache = new Linkedlist() // Time window based caching
        this.endToken = endToken
    }

    peek() {
        if (this.stackPutBacks.length > 0) {
            return this.stackPutBacks.head
        }

        const val = this.next()
        this.putBack()
        return val // Why can you not add " || this.endToken "
    }

    // Fetching values from the cache
    // cache: a -> b -> c
    // putBack: c -> b -> a
    putBack() {
        if (this.queueCache.length > 0) {
            this.stackPutBacks.push(this.queueCache.pop())
        }
    }

    hasNext() {
        return this.endToken || !!this.peek()
        // If endToken has a value then there must be a next element
        // Equivalent to converting any type to a boolen type
        // Example: !null -> true  !! null -> false
    }

    next() {
        let val = null // block scope

        if (this.stackPutBacks.length > 0) {
            val = this.stackPutBacks.pop()
        } else {
            val = this.it.next().value
            if (val === undefined) {
                const tmp = this.endToken
                this.endToken = null
                return tmp
            }
        }

        // Processing Cache
        while (this.queueCache.length > CACHE_SIZE - 1) {
            this.queueCache.shift() // pollFirst
        }
        this.queueCache.push(val)

        return val
    }
}

module.exports = PeekIterator

/*
Syntax Notes: 
By default all methods and properties of javascript are public properties.
*/
