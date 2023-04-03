const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isReversed = !isDirect;
    this.aCode = 65;
    this.zCode = 90;
  }

  normalizeStrings(string, keyString) {
    const str = string.toUpperCase();
    let key = keyString.toUpperCase();
    while (key.length < str.length) key = key.repeat(2);
    key = key.slice(0, str.length);
    return [str, key];
  }

  encrypt(string, keyString) {
    if (typeof string === 'undefined' || typeof keyString === 'undefined') throw Error('Incorrect arguments!');
    const [str, key] = this.normalizeStrings(string, keyString);
    let result = '';
    for (let i = 0, j = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= this.aCode && str.charCodeAt(i) <= this.zCode) {
        const shift = key.charCodeAt(j) - this.aCode;
        const newCode = (str.charCodeAt(i) + shift) <= this.zCode ?
            str.charCodeAt(i) + shift :
            str.charCodeAt(i) + shift - this.zCode + this.aCode - 1; 
        result += String.fromCharCode(newCode);
        j++;
      } else result += str[i];
    }
    if (this.isReversed) result = result.split('').reverse().join('');
    return result
  }
  decrypt(string, keyString) {
    if (typeof string === 'undefined' || typeof keyString === 'undefined') throw Error('Incorrect arguments!');
    const [str, key] = this.normalizeStrings(string, keyString);
    let result = '';
    for (let i = 0, j=0; i < str.length; i++) {
      if (str.charCodeAt(i) >= this.aCode && str.charCodeAt(i) <= this.zCode) {
        const shift = key.charCodeAt(j) - this.aCode;
        const newCode = (str.charCodeAt(i) - shift) >= this.aCode ?
            str.charCodeAt(i) - shift :
            this.zCode - (this.aCode - str.charCodeAt(i) + shift) + 1; 
        result += String.fromCharCode(newCode);
        j++;
      } else result += str[i];
    }
    if (this.isReversed) result = result.split('').reverse().join('');
    return result
  }
}

module.exports = {
  VigenereCipheringMachine
};
