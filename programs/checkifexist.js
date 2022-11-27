// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

var checkIfExist = function (arr) {
	if (!arr) return false;

	let map = new Map();
	for (let i of arr) {
		if (map.has(i * 2) || (i % 2 == 0 && map.has(i / 2))) {
			return true;
		} else {
			map.set(i);
		}
	}
	return false;
};

console.log(checkIfExist([14, 1, 7, 11]));
