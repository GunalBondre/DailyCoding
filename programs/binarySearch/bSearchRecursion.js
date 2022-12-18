const findMin = (arr) => {
	let left = 0;
	let right = arr.length - 1;

	if (arr[right] > arr[0]) return arr[0];
	while (left <= right) {
		let mid = left + Math.floor((right - left + 1) / 2);

		if (arr[mid] > arr[mid + 1]) return arr[mid + 1];
		if (arr[mid] < arr[mid - 1]) return arr[mid];
		if (arr[mid] > arr[0]) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
};

console.log(findMin([1]));
