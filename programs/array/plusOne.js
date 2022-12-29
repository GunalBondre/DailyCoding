const plusOne = (arr) => {
	for (let i = arr.length - 1; i >= 0; i--) {
		arr[i]++;
		if (arr[i] > 9) {
			arr[i] = 0;
		} else {
			return arr;
		}
	}
	arr.unshift(1);

	return arr;
};
console.log(plusOne([9, 9, 9]));
