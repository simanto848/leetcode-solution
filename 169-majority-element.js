var majorityElement = function (nums) {
  let count = 0;
  let target = null;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      target = nums[i];
      count++;
    } else {
      if (target === nums[i]) {
        count++;
      } else {
        count--;
      }
    }
  }
  return target;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
