import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = '';
  let tempStr = '';
  let tempCount = ''
  for (const s of str.split("")) {
    if (s === tempStr) {
      tempCount += 1;
    } else {
      if (tempStr !== '') {
        res += tempCount > 1 ? tempCount + tempStr : tempStr;
      }
      tempCount = 1;
      tempStr = s;
    }
  }
  res += tempCount > 1 ? tempCount + tempStr: tempStr;
  return res;
}
