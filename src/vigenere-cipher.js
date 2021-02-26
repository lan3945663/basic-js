
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class VigenereCipheringMachine {
  constructor(mode) {
    // console.log(mode)
    if(mode === false) {
      this.mode = 'revert';
    } else {
      this.mode = 'right';
    }
    this.x = this.shapeTable()
  }

  shapeTable() {
    let mas = []

    for(let i = 0; i < alphabet.length; i++) {
      let v = [alphabet[i]];
      mas.push(v);
    }

    for(let i = 0; i < mas.length; i++) {
      let y = alphabet.split(mas[i]);

      if(y[1]) {
        mas[i] = mas[i].concat(y[1].split(''));
      }

      if(y[0]) {
        mas[i] = mas[i].concat(y[0].split(''));
      }
    }

    return mas
  }

  prepareKey(message, key) {
    // console.log(message, key)

    let msg = '';
    let k = key;

    for(let i = 0; i < message.length; i++) {
      const x = message[i].toUpperCase();

      if(alphabet.includes(x)) {
        msg += x;
      }
    }

    if(k.length > msg.length) {
      k = k.substr(0, msg.length)
    } else {
      let rest = msg.length % k.length;
    
      if(rest === 0) {
        const count = msg.length / k.length;
        k += k.repeat(count-1);
  
        // console.log(k.length)
      } else {
        const count = (msg.length - rest) / k.length;
  
        if(count > 1) {
          k += k.repeat(count - 1);
        }     
  
        for(let i = 0; i < rest; i++) {
          k += key[i];
        }
      }
    }

    
    let obj = {
      msg,
      k: k.toUpperCase()
    }
    return obj
  }

  encrypt(message, key) {
    

    const { msg, k } = this.prepareKey(message, key);

    // console.log(msg.length, k.length)

    let res = [];

    for(let i = 0; i < msg.length; i++) {
      let pos1 = alphabet.indexOf(msg[i]);
      res.push({m: pos1})
    }

    // console.log(res)

    for(let i = 0; i < k.length; i++) {
      let pos = alphabet.indexOf(k[i])
      res[i].k = pos
    }

    let str = '';
    for(let i = 0; i < res.length; i++) {
      str += this.x[res[i].m][res[i].k] 
    }

    // console.log(str, message)

    let newStr = str.split('')

    for(let i = 0; i < message.toUpperCase().length; i++) {
      if(!alphabet.includes(message[i].toUpperCase())) {
        newStr.splice(i, 0, message[i].toUpperCase());
      }
    }

    if(this.mode === 'revert') {
      return newStr.reverse().join('')
    } else {
      return newStr.join('')
    }
  }

  decrypt(message, key) {
    const { msg, k } = this.prepareKey(message, key);

    // console.log(msg.length, k.length);

    let res = [];

    for(let i = 0; i < msg.length; i++) {
      let pos1 = alphabet.indexOf(msg[i]);
      res.push({m: pos1})
    }

    for(let i = 0; i < k.length; i++) {
      let pos = alphabet.indexOf(k[i])
      res[i].k = pos
    }

    // console.log(this.x, k)

    let str = '';
    for(let i = 0; i < res.length; i++) {
      let pos = this.x[res[i].k].indexOf(msg[i])

      str += alphabet[pos];
      // console.log(pos)
    }

    let newStr = str.split('')

    for(let i = 0; i < message.length; i++) {
      if(!alphabet.includes(message[i])) {
        newStr.splice(i, 0, message[i]);
      }
    }

    if(this.mode === 'revert') {
      return newStr.reverse().join('')
    } else {
      return newStr.join('')
    }
  }
}


module.exports = VigenereCipheringMachine;

// const directMachine = new VigenereCipheringMachine();

// console.log(directMachine.encrypt('cryptography', 'verylongkeyword'))