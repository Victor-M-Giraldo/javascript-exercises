const reverseString = function (word) {
  let ans = "";
  for (let index = word.length - 1; index >= 0; index--) {
    ans += word[index];
  }
  return ans;
};

// Do not edit below this line
module.exports = reverseString;
