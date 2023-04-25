const search = (arr, target) => {
	let sorted = [...arr].sort((a, b) => a - b);
	let start = 0;
	end = arr.length - 1;

	while (start < end) {
		let mid = start + Math.floor((end - start + 1) / 2);
		if (sorted[mid] === target) return mid;
		if (sorted[mid] > target) {
			end = mid - 1;
		} else {
			start = mid;
		}
	}

	return sorted[start] === target ? arr.indexOf(start) : -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
