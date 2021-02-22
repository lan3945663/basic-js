const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(isNaN(Number(sampleActivity))) {
    return false
  }

  if(typeof sampleActivity !== 'string') {
    return false
  }

  if(sampleActivity >= 15 || sampleActivity <= 0) {
    return false
  }

  const rate = 0.693 / HALF_LIFE_PERIOD;
  const elapsedTime = Math.log(MODERN_ACTIVITY / sampleActivity) / rate;
  const elapsedTimeRounded = Math.ceil(elapsedTime);

  return elapsedTimeRounded
};