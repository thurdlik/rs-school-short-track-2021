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
function encodeLine(str) {
  const result = [];
  let sum = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      sum += 1;
    } else {
      result.push(sum + str[i]);
      sum = 1;
    }
  }
  let answer = result.join('');
  answer = answer.replace(/1/gm, '');
  return answer;
}

module.exports = encodeLine;
