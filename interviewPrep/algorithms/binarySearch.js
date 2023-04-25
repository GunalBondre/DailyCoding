const bSearch = (arr, target) => {
	let start = 0;
	let end = arr.length - 1;

	while (start < end) {
		let mid = start + Math.floor((end - start + 1) / 2);

		if (arr[mid] === target) {
			return mid;
		}
		if (arr[mid] < target) {
			start = mid;
		} else {
			end = mid - 1;
		}
	}

	return arr[start] === target ? start : -1;
};

console.log(bSearch([-2, 1, 3, 5, 7], 5));
