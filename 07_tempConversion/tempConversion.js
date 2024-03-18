const convertToCelsius = function (temp) {
  let ans = (temp - 32) * 5 / 9;
  ans = ans.toFixed(1);
  return parseFloat(ans);
};

const convertToFahrenheit = function (temp) {
  let ans = temp * 9 / 5 + 32;
  ans = ans.toFixed(1);
  return parseFloat(ans);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
