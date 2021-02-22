const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const cat = '^^';
  let catCount = 0;

  matrix.forEach(el => {
    el.forEach(n => {
      if(n === cat) {
        catCount += 1;
      }
    })
  });

  return catCount
};