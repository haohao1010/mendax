// Generate iterators
function* arrayToGenerator(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i] // return arr[0]、return arr[1]、return arr[2]
    }
}

module.exports = arrayToGenerator
