const removeElement = (arr) => {
	let write = 1;
	if (arr == null) return;
	for (let read = 1; read < arr.length; read++) {
		if (arr[read] !== arr[read - 1]) {
			arr[write] = arr[read];
			write++;
		}
	}
	return arr.splice(0, arr.length - write);
};

console.log(removeElement([0, 0, 1, 1, 1, 2, 3, 3, 4, 4]));
