const palindromes = function (word) {
    // take string
    // split string to arr
    // reverse arr
    // join arr = newString
    // check if string = newString
    // if == return true
    // else return false

    let stringArr = word.split("");
    let reverse = stringArr.reverse()
    let joined = reverse.join("")

    if (joined != word) {
        return false
    }

    return true
};

// Do not edit below this line
module.exports = palindromes;
