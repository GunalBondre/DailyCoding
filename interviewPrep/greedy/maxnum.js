const maxnum = (nums) => {
	let max = 0;
	nums = nums.toString().split('');
	let start = 0;
	if (nums.every((digit) => digit === '9')) {
		return nums;
	}
	let copy = nums.slice();
	while (start < copy.length) {
		if (parseInt(copy[start]) === 9) {
			copy[start] = 6;
		} else if (parseInt(copy[start]) === 6) {
			copy[start] = 9;
		}
		max = Math.max(max, copy.join(''));
		start++;
		copy = nums.slice();
	}
	return max;
};
console.log(maxnum(9999));
