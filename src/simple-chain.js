import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  values : [],

  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.values.length;
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (typeof value === 'undefined') {
      this.values.push('( )');
    }
    else {
      this.values.push("( " + value + " )");
    }
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if ((typeof position !== 'number') || position < 1 || position > this.values.length) {
      this.values = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.values.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.values = this.values.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const arr = this.values;
    this.values = [];
    return arr.join("~~");
  }
};
export default chainMaker;
