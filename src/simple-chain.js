const CustomError = require("../extensions/custom-error");

const separator = '~~';

const chainMaker = {
  chain: '',
  getLength() {
    return this.chain
  },
  addLink(value) {
    if(this.chain === '') {
      this.chain += `( ${value} )`;
    } else {
      this.chain += `${separator}( ${value} )`;
    }
    
    return this
  },
  removeLink(position) {
    let temp = this.chain.split(separator);
    
    if(typeof position === 'number' && temp[position - 1]) {
      temp.splice(position - 1, 1);

      this.chain = temp.join(separator);
    } else {
      this.chain = '';
      throw new Error();
    }

    return this
  },
  reverseChain() {
    let reversed = this.chain.split(separator).reverse().join(separator);

    this.chain = reversed;
    return this
  },
  finishChain() {
    let copy = this.chain;
    this.chain = ''

    return copy
  }
};

module.exports = chainMaker;