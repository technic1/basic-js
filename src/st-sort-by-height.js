import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const res = [];
  let positiveNums = []

  arr.forEach((num) => {
    if (num < 0) {
      res.push(num);
    } else {
      positiveNums.push(num);
      res.push(null);
    }
  });
  let i = 0;
  positiveNums = positiveNums.sort((l, r) => l - r);

  return res.map((num) => {
    if (num === null) {
      return positiveNums[i++];
    } else return num;
  });
}
