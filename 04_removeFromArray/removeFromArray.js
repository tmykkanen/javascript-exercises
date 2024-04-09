const removeFromArray = function(array, ...remove) {
  let cleanArray = array;
  
  console.log('array: ' + array)

  for (const element of remove) {
    cleanArray = cleanArray.filter(item => {
      return item !== element;
    });
  }

  console.log('clean array: ' + cleanArray)
  
  return cleanArray;
};

// Do not edit below this line
module.exports = removeFromArray;
