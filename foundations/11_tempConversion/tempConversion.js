
// farhenheit to celsius
const convertToCelsius = function(temp) {
  // (32°F − 32) × 5/9 = 0°C
  let celsius = (temp - 32) * 5/9
  return celsius
};

// celsius to farhenheit
const convertToFahrenheit = function(temp) {
  // (0°C × 9/5) + 32 = 32°F
  let farhenheit = (temp * 9/5) + 32
  return farhenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
}; 
