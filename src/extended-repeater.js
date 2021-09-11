import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;

  let res = '';
  if (!separator) separator = '+';
  if (!additionSeparator) additionSeparator = '|';

  let add = '';
  if (additionRepeatTimes > 1) {
    for (let j = 0; j < additionRepeatTimes; j++) {
      if (j > 0) {
        add += additionSeparator;
      }
      add += addition;
    }
  } else if (addition) {
    add = addition;
  }

  if (!repeatTimes || repeatTimes === 1) {
    res += str + add;
  } else {
    for (let i = 0; i < repeatTimes; i++) {
      if (i > 0) {
        res += separator;
      }
      res += str + add;
    }
  }

  return res;
}
