const convertToCelsius = function(fTemp) {
  // C = fTemp X 9/5 + 32
  console.log("ftemp: " + fTemp)

  let C = (fTemp - 32) * (5/9)

  console.log("type before:" + typeof C)

  if (!Number.isInteger(C)) {
    C = +C.toFixed(1)
  }
  
  console.log("type after:" + typeof C)

  return C;

};

const convertToFahrenheit = function(cTemp) {
  
  let F = cTemp * (9/5) + 32

  if (!Number.isInteger(F)) {
    F = +F.toFixed(1)
  }
  
  return F;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
