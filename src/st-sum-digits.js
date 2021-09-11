import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let res = 0;

  const sortedArr = ('' + n).split('')
      .map((s) => Number.parseInt(s))
      .sort((l, r) => l - r);
  for (const num of sortedArr) {
    if ((res + num) > 9) return res;
    else {
      res += num;
    }
  }
  return res;
}
