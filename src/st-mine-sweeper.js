import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const res = [];

  for (let i = 0; i < matrix.length; i++) {
    const temp = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;
      for (let k = i - 1; k <= i + 1; k++) {
        for (let z = j - 1; z <= j + 1; z++) {
          if (!(k === i && z === j)) {
            if (k >= 0 && z >= 0 && k < matrix.length && z < matrix[i].length && matrix[k][z] === true) count++;
          }
        }
      }
      temp.push(count);
    }
    res.push(temp);
  }
  return res;
}
