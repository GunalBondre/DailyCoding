var search = function (nums, target) {
	let sorted = [...nums].sort((a, b) => a - b);
	let low = 0;
	let high = sorted.length - 1;
	while (low < high) {
		let mid = low + Math.floor((high - low + 1) / 2);

		if (target < sorted[mid]) {
			high = mid - 1;
		} else {
			low = mid;
		}
	}
	return sorted[low] === target ? nums.indexOf(sorted[low]) : -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
