const sumAll = function (num1, num2) {
    // returns ERROR with negative numbers
    // returns ERROR with non-integer parameters
    // returns ERROR with non-number parameters - string
    // returns ERROR with non-number parameters - array

    // determine if one of the values is negative, non-integers (floats), non-numbers (strings or arrays)
    // if num1 is greater than num2 - decrement num1, else increment num1

    // must return the sum, which is one value, maybe we can use reduce here to add it all up.


    if (num1 < 0 || num2 < 0) { return; }
    if (typeof (num1) != "number" || typeof (num2) != "number") { return; }

    let sumArr = []

    if (num1 > num2) {
        for (let i = num1; i >= num2; i--) {
            sumArr.push(i)
        }
        let result = sumArr.reduce((prev, current) => prev + current)
        return result
    }
    else {
        for (let i = num1; i <= num2; i++) {
            sumArr.push(i)
        }
        let result = sumArr.reduce((prev, current) => prev + current)
        return result
    }
};

// Do not edit below this line
module.exports = sumAll;