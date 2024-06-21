/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function (n, k) {
  let ball = 0;
  let direction = 1;

  while (k > 0) {
    if (ball === 0 && direction === -1) {
      direction = 1;
    } else if (ball === n - 1 && direction === 1) {
      direction = -1;
    }

    ball += direction;
    k--;
  }
  return ball;
};
