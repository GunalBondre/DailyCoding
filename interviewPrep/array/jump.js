/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
	let currJump = 0;
	let nextJump = 0;
	let jump = 0;

	for (let i = 0; i < nums.length; i++) {
		nextJump = Math.max(nextJump, i + nums[i]);
		if (i === currJump) {
			jump++;
			currJump = nextJump;
		}
		if (currJump >= nums.length - 1) {
			break; // If the current maximum reach can reach the last element, exit the loop
		}
	}
	return jump;
};

console.log(jump([3, 2, 1, 0, 4]));
