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
function deleteDigit(n) {
  const result = [];
  let sum = 0;
  let str = n.toString();
  for (let i = 0; i < str.length; i++) {
    str = str.replace(str[i], '');
    result.push(parseInt(str, 10));
    str = n.toString();
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] > sum) {
      sum = result[i];
    }
  }
  return sum;
}

module.exports = deleteDigit;
