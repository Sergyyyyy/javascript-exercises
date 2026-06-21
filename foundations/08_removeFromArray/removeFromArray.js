const removeFromArray = function (arr, ...nums) {
    // use filter to check the condition that if an item in an array is equal to the passed argument, we remove that item/don't include it.

    //outerloop controls arr while inner loop controls ...nums!
    for (let i = 0; i <= nums.length; i++) {
        for (let j = 0; j <= arr.length; j++) {
            if (arr[j] == nums[i]) {
                arr.splice(j, 1)
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
