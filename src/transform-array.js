import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!(Array.isArray(arr))) throw new Error('\'arr\' parameter must be an instance of the Array!');
  const res = [];
  const test = ['--discard-next' , '--discard-prev', '--double-next', '--double-prev'];

  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    if (e === '--discard-next') {
      i++;
    } else if (e === '--discard-prev' && res.length > 0 && res[res.length - 1] === arr[i - 1]) {
      res.splice(-1);
    } else if (e === '--double-next' && arr[i+1]) {
      res.push(arr[i+1]);
    } else if (e === '--double-prev' && res.length > 0 && res[res.length - 1] === arr[i-1]) {
      res.push(res[res.length - 1]);
    } else if (e && !test.includes(e)) {
      res.push(e);
    }
  }
  return res;
}
