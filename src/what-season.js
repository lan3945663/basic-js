const CustomError = require("../extensions/custom-error");

const SPRING = 'spring';
const SUMMER = 'summer';
const FALL = 'fall';
const WINTER = 'winter';

module.exports = function getSeason(date) {
  if(!date) {
    return 'Unable to determine the time of year!'
  }

  if(Object.prototype.toString.call(date) !== '[object Date]') {
    throw Error('');
  }

  const year = {
    1: WINTER,
    2: WINTER,
    3: SPRING,
    4: SPRING,
    5: SPRING,
    6: SUMMER,
    7: SUMMER,
    8: SUMMER,
    9: FALL,
    10: FALL,
    11: FALL,
    12: WINTER
  }

  if(date instanceof Date) {
    const month = date.getMonth() + 1;
    return year[month]
  } else {
    throw Error('');
  }
};