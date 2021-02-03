const LinkedList = require("linkedlist")

const CACHE_SIZE = 10

class PeekIterator {
    constructor(it, endToken = null) {
        this.it = it
        this.stackPutBacks = new LinkedList()
        this.queueCache = new LinkedList()
        this.endToken = endToken
    }

    peek() {
        if (this.stackPutBacks.length > 0) {
            return this.stackPutBacks.tail
        }
        const val = this.next()
        this.putBack()
        return val
    }

    putBack() {
        if (this.queueCache.length > 0) {
            this.stackPutBacks.push(this.queueCache.pop())
        }
    }

    hasNext() {
        return this.endToken || !!this.peek()
    }

    next() {
        let val = null
        if (this.stackPutBacks.length > 0) {
            val = this.stackPutBacks.pop()
        } else {
            val = this.it.next().value
            if (val === undefined) {
                const tmp = this.endToken
                this.endToken = null
                val = tmp
            }
        }

        while (this.queueCache.length > CACHE_SIZE - 1) {
            this.queueCache.shift()
        }

        this.queueCache.push(val)
        return val
    }
}

module.exports = PeekIterator
