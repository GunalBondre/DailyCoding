const removeOccurances = (arr, val) => {
	let index = 0;
	for (let i in arr) {
		if (arr[i] != val) {
			arr[index] = arr[i];
			index++;
		}
	}
	return arr.slice(0, index);
};

console.log(removeOccurances([1, 2, 2, 3, 4, 2], 2));
