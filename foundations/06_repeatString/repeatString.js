const repeatString = function(str, num) {
    let stringArr = []

    if (num < 0) { console.log('ERROR') }

    for (let i = 0; i < num; i++){
        const newStr = str;
        stringArr.push(newStr)
    }
    let result = stringArr.join("")
    return result
};

// Do not edit below this line
module.exports = repeatString;
