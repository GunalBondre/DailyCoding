var minMaxDifference = function (nums) {
	const strs = String(nums);
	let maxValue = '';
	let minValue = strs[0];
	for (const str of strs) {
		if (str !== '9') maxValue = str;
		if (maxValue) break;
	}

	const val = {
		max: '',
		min: '',
	};

	for (const str of strs) {
		val.max += str === maxValue ? '9' : str;
		val.min += str === minValue ? '0' : str;
	}

	return +val.max - +val.min;
};

console.log(minMaxDifference(11891));
