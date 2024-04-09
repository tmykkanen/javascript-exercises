const reverseString = function(string) {
  const stringArray = string.split("");
  const stringArrayReversed = stringArray.reverse();
  return stringArrayReversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
