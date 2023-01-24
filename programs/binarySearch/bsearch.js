var search = function (arr, left, right, number) {
	if (left > right) return -1;

	let mid = left + Math.floor((right - left + 1) / 2);

	if (number === arr[mid]) return mid;

	if (number > arr[mid]) {
		return search(arr, mid + 1, right, number);
	}

	return search(arr, left, mid - 1, number);
};

let arr = [-1, 0, 3, 5, 9, 12];
console.log(search(arr, 0, arr.length - 1, 9));
