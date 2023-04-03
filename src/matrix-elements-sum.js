const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
  let counter = 0;
  matrix.forEach((arr,arrIndex) => {
    arr.forEach((num, numIndex) => {
      for (let prev = arrIndex-1; prev >= 0; prev--) {
        if (matrix[prev][numIndex] === 0) return;
      }
      counter += num;
    })
  });
  return counter;
}

module.exports = {
  getMatrixElementsSum
};
