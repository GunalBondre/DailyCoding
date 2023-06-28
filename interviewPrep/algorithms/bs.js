function binarysearch(arr, n, k) {
	// code here
	let high = n;
	let low = 0;

	while (low < high) {
		let mid = low + Math.floor((high - low) / 2);

		if (arr[mid] == k) {
			return mid;
		}
		if (arr[mid] > k) {
			high = mid - 1;
		} else {
			low = mid;
		}
	}
	return arr[low] == k ? low : -1;
}

console.log(binarysearch([1, 2, 3, 4, 5], 5, 5));
