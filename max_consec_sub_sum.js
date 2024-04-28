const { log } = require("console");

function getMaxSubSum(nums) {
    let maxSum = 0,
    partialSum = 0;

    for (let num of nums) {
        partialSum += num;

        if (partialSum < 0) {
            partialSum = 0;
        }

        maxSum = Math.max(partialSum, maxSum);
    }
    return maxSum;
}

log(getMaxSubSum([-1, 2, 3, -9]) == 5);
log(getMaxSubSum([2, -1, 2, 3, -9]) == 6);
log(getMaxSubSum([-1, 2, 3, -9, 11]) == 11);
log(getMaxSubSum([-2, -1, 1, 2]) == 3);
log(getMaxSubSum([100, -9, 2, -3, 5]) == 100);
log(getMaxSubSum([1, 2, 3]) == 6);