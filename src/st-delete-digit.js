import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const numArr = ('' + n).split('').map((s) => Number.parseInt(s));

  const min = Math.min(...numArr);
  numArr.splice(numArr.indexOf(min), 1)
  return Number.parseInt(numArr.join(""));
}
