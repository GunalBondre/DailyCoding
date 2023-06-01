const rotate = (arr, k) => {
	let result = [];

	for (let i = k + 1; i < arr.length; i++) {
		result.push(arr[i]);
	}

	for (let i = 0; i < k + 1; i++) {
		result.push(arr[i]);
	}

	return result;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
