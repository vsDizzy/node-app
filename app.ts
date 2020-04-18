import * as assert from 'assert';

export function canIWin(
  maxChoosableInteger: number,
  desiredTotal: number
): boolean {
  const nums = [];
  for (let i = 1; i <= maxChoosableInteger; i++) {
    nums.push(i);
  }

  function filter(nums, i) {
    return nums.filter(function (v, j) {
      return j != i;
    });
  }

  function move(nums, pot, isSecondPlayer) {
    if (!isSecondPlayer) {
      const max = pot + Math.max(...nums);
      if (max >= desiredTotal) {
        return true;
      }

      for (let i = 0; i < nums.length; i++) {
        return move(filter(nums, i), pot + nums[i], true);
      }
    } else {
      const max = pot + Math.max(...nums);
      if (max >= desiredTotal) {
        return false;
      }

      for (let i = 0; i < nums.length; i++) {
        return move(filter(nums, i), pot + nums[i], false);
      }
    }
  }

  return move(nums, 0, false);
}

// assert.equal(canIWin(10, 11), false);
// assert.equal(canIWin(10, 0), true);
assert.equal(canIWin(10, 40), false);
