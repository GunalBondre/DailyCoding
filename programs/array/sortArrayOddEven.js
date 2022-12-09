const sort = (arr) => {
	let oddCount = 0;
	if (!arr) return;
	for (let i in arr) {
		if (arr[i] % 2 !== 0) {
			oddCount += 1;
		} else {
			let temp = arr[i];
			let temp1 = arr[i - oddCount];
			arr[i - oddCount] = temp;
			arr[i] = temp1;
		}
	}
	return arr;
};

console.log(sort([3, 1, 2, 4]));
