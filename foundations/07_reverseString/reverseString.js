const reverseString = function(str) {
    let newStr = str.split("")
    let reverse = newStr.reverse()
    let join = reverse.join("")

    return join
};

// Do not edit below this line
module.exports = reverseString;
