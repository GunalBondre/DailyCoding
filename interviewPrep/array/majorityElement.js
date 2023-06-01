/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let obj = {};
	let max = 0;
	for (let num of nums) {
		obj[num] = obj[num] + 1 || 1;
	}
	for (let i in obj) {
		max = Math.max(max, obj[i]);
	}
	for (let i in obj) {
		if (obj[i] === max) {
			return i;
		}
	}
};

console.log(majorityElement([1, 1, 2, 2, 2, 1, 1]));
