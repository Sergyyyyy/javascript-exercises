const leapYears = function(year) {
    // years divisible by 4 = leap years
    // years divisible by 400 = leap years
    // years divisible by 100 = not leap years
    
    if (year % 400 == 0) { return true }

    if (year % 100 == 0) { return false }

    if (year % 4 == 0) { return true}
    else { return false }
};

// Do not edit below this line
module.exports = leapYears;
