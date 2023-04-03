const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr, depth = 0 ) {
    let currentDepth = depth +1;
    let newDepth = 0;
      arr.map(el => {
        if (Array.isArray(el))  newDepth =  Math.max(newDepth,this.calculateDepth(el, currentDepth));
      });
    return Math.max(currentDepth, newDepth);
  }
}

module.exports = {
  DepthCalculator
};
