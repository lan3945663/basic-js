const CustomError = require("../extensions/custom-error");

const DISCARD_NEXT = '--discard-next';
const DISCARD_PREV = '--discard-prev';
const DOUBLE_NEXT = '--double-next';
const DOUBLE_PREV = '--double-prev';

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error('arr is not an array!')
  }

  function checkIsElExist(el) {
    if(el !== undefined) {
      return true
    }
  }

  let res = [];

  arr.forEach((el, i, mas) => {
    if(el !== DISCARD_NEXT && el !== DISCARD_PREV && el !== DOUBLE_PREV && el !== DOUBLE_NEXT) {
      res.push(el);
    }
   
    if(mas[i - 1] === DISCARD_NEXT) {
      if(checkIsElExist(mas[i])) {
        res.pop();
      }
    }

    if(el === DOUBLE_NEXT) {
      if(checkIsElExist(mas[i + 1])) {
        res.push(mas[i + 1]);
      }
    }

    if(el === DISCARD_PREV) {
      if(checkIsElExist(mas[i - 1]) && mas[i - 2] !== DISCARD_NEXT) {
        res.pop();
      }
    }

    if(el === DOUBLE_PREV) {
      if(checkIsElExist(mas[i - 1]) && mas[i - 2] !== DISCARD_NEXT) {
        res.push(mas[i - 1]);
      }
    }
  });

  return res
};