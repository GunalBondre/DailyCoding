const duplicateZero = (arr) => {
	let dup_zero = 0;
	let arr_length = arr.length - 1;
	for (let i = 0; i < arr_length - dup_zero; i++) {
		if (arr[i] === 0) {
			if (arr[i] === arr_length - dup_zero) {
				arr[arr_length] = 0;
				arr_length -= 1;
				break;
			}
			dup_zero += 1;
		}
	}
	let last = arr_length - dup_zero;
	for (let i = last; i >= 0; i--) {
		if (arr[i] === 0) {
			arr[i + dup_zero] = 0;
			dup_zero -= 1;
			arr[i + dup_zero] = 0;
		} else {
			arr[i + dup_zero] = arr[i];
		}
	}
	return arr;
};

console.log(duplicateZero([1, 0, 2, 0, 3, 4, 0, 5]));
// 1,0,0,2,0,0,3,4
