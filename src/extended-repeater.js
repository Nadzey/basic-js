const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  let additionResult = '';
  let separator = options.separator || '+';
  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionStr = options.addition === undefined ? '' : options.addition;
  let additionSeparator = options.additionSeparator || '|';

  // Формирование строки добавления
  for (let i = 0; i < additionRepeatTimes; i++) {
      additionResult += additionStr;
      if (i < additionRepeatTimes - 1) additionResult += additionSeparator;
  }

  // Формирование основной строки
  let result = '';
  for (let i = 0; i < repeatTimes; i++) {
      result += str + additionResult;
      if (i < repeatTimes - 1) result += separator;
  }

  return result;
}

module.exports = {
  repeater
};
