var combine = function (n, k) {
	let arr = [];
	let start = 1;
	let end = 2;

	while (end <= n) {
		arr.push([start, end]);
		end++;
		if (end === n) {
			start++;
			end = start + 1;
		}
	}
	return arr;
};

console.log(combine(4, 2));
