const quicksort = (arr) => {
	let pivote = arr[0];
	if (arr.length <= 1) {
		return arr;
	}

	let left = [];
	let middle = [];
	let right = [];

	for (let i in arr) {
		if (arr[i] < pivote) {
			left.push(arr[i]);
		} else if (arr[i] > pivote) {
			right.push(arr[i]);
		} else {
			middle.push(arr[i]);
		}
	}

	return [...quicksort(left), ...middle, ...quicksort(right)];
};

console.log(quicksort([3, 2, 1, 5, 7, 6, 9, 8]));
