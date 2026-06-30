const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  if (arr.length == 0) { return 0 }
  else { return arr.reduce((acc, cur) => acc + cur ) }
};

const multiply = function(arr) {
  return arr.reduce((acc, cur) => acc * cur )
};

const power = function(base, exp) {
  return base ** exp
};

const factorial = function(x) {
    let holder = []

    if (x == 0) { return 1}

    for (let i = x; i >= 1; i--){
        holder.push(i)
        console.log(holder)
    }
    
    return holder.reduce((acc, cur) => acc * cur)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
