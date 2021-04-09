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
function getSumOfDigits(n) {
  let count = 0;
  if (n.length === 1) {
    return n;
  }
  let myArr = n.toString().split('');
  while (myArr.length !== 1) {
    count = 0;
    for (let i = 0; i < myArr.length; i++) {
      count += parseInt(myArr[i], 10);
    }
    myArr = count.toString().split('');
  }
  return count;
}

module.exports = getSumOfDigits;
