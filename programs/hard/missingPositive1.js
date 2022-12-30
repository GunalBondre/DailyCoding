const missing = (arr) => {
	let map = new Map();

	for (let i in arr) {
		map.set(arr[i], i);
	}
	console.log(map);

	for (let i = 1; i <= arr.length; i++) {
		if (!map.has(i)) return i;
	}
	return arr.length + 1;
};
console.log(missing([1, 0, 4]));

module.exports = missing;
