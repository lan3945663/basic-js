const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = '';

  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  const strToStr = typeof str === 'string' ? str : String(str)

  let addition;
  if(options.addition !== undefined) {
    addition = typeof options.addition === 'string'  ? options.addition : String(options.addition);
  } else{
    addition = '';
  }

  function isNeedSeparator(i, repeatTimes, seaparator) {
    if(i < repeatTimes) {
      res += seaparator;
    }
  }

  if(options.repeatTimes) {
    for(let i = 1; i <= options.repeatTimes; i++) {
      res += strToStr;

      if(addition) {
        if(options.additionRepeatTimes) {
          for(let i = 1; i <= options.additionRepeatTimes; i++) {
            res += addition;

            isNeedSeparator(i, options.additionRepeatTimes, additionSeparator);
          }
        } else {
          res += addition;
        }    
      }
      
      isNeedSeparator(i, options.repeatTimes, separator);
    }

    return res
  }
  
  res += `${strToStr}${addition}`;
  
  return res
};