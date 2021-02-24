const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let level = 1;

    arr.forEach(el => {
      if(Array.isArray(el)) {    
        let depth = this.calculateDepth(el) + 1;

        if(depth > level) {
          level = depth;
        }
      }
    });

    return level
  }
};