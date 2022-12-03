const replaceRight = (arr) => {
	let max = -1;
	for (let i = arr.length - 1; i >= 0; --i) {
		max = Math.max(arr[i], (arr[i] = max));
	}
	return arr;
};

console.log(replaceRight([17, 18, 5, 4, 6, 1]));
