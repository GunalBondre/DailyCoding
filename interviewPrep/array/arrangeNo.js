const arrangeNumbers = (arr) => {
	let result = [];
	for (let i in arr) {
		if (arr[i] % 2 === 0) {
			result.unshift(arr[i]);
		} else {
			result.push(arr[i]);
		}
	}
	return result;
};

console.log(arrangeNumbers([4, 3, 5, 7, 8, 2, 9]));
