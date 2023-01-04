const bSearch = (arr, left, right, number) => {
	if (left > right) return -1;

	let mid = left + Math.floor((right - left + 1) / 2);

	if (number === arr[mid]) return mid;

	if (number > arr[mid]) {
		return bSearch(arr, mid + 1, right, number);
	}

	return bSearch(arr, left, mid - 1, number);
};

let arr = [1, 3, 4, 6, 8, 9, 11, 13, 23];

console.log(bSearch(arr, 0, arr.length - 1, 6));
