import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {

  constructor(type) {
    if (type === undefined) {
      this.type = true;
    } else {
      this.type = type;
    }
    this.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  encrypt(string, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (string === undefined || key === undefined) throw new Error('Incorrect arguments!');

    let res = '';
    const keyArr = key.toUpperCase().repeat(Math.floor(string.length / key.length) + 1).split("");
    const strArr = string.toUpperCase().split("");

    for (let i = 0, j = 0; i < strArr.length; i++, j++) {
      if (this.letters.indexOf(strArr[i]) === -1) {
        res += strArr[i];
        j--;
        continue;
      }
      while (this.letters.indexOf(keyArr[j]) === -1) {
        j++;
      }
      let index = this.letters.indexOf(strArr[i]) + this.letters.indexOf(keyArr[j]);
      if (index + 1 > this.letters.length) {
        index -= this.letters.length;
      }
      res += this.letters[index];
    }

    if (!this.type) {
      res = res.split("").reverse().join("");
    }
    return res;
  }
  decrypt(string, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (string === undefined || key === undefined) throw new Error('Incorrect arguments!');

    let res = '';
    const keyArr = key.toUpperCase().repeat(Math.floor(string.length / key.length) + 1).split("");
    const strArr = string.toUpperCase().split("");

    for (let i = 0, j = 0; i < strArr.length; i++, j++) {
      if (this.letters.indexOf(strArr[i]) === -1) {
        res += strArr[i];
        j--;
        continue;
      }
      while (this.letters.indexOf(keyArr[j]) === -1) {
        j++;
      }
      let index = this.letters.indexOf(strArr[i]) - this.letters.indexOf(keyArr[j]);
      if (index < 0) {
        index += this.letters.length;
      }
      res += this.letters[index];
    }
    if (!this.type) {
      res = res.split("").reverse().join("");
    }
    return res;
  }
}
