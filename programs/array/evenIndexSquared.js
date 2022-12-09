const evenSq = (arr) => {
	for (let i in arr) {
		if (i % 2 === 0) {
			arr[i] = arr[i] * arr[i];
		}
	}
	return arr;
};
console.log(evenSq([3, 1, 4, 5, 7, 5]));
