var wordPattern = function (pattern, s) {
	let map1 = {};
	let map2 = {};

	for (let char of pattern) {
		map1[char] = map1[char] + 1 || 1;
	}
	s = s.split(' ');
	for (let char of s) {
		map2[char] = map2[char] + 1 || 1;
	}

	if (Object.entries(map1).length !== Object.entries(map2).length) {
		return false;
	} else {
		val1 = Object.values(map1);
		val2 = Object.values(map2);

		for (let i in val1) {
			if (val1[i] !== val2[i]) {
				return false;
			}
		}
	}
	return true;
};

console.log(wordPattern('abba', 'dog cat cat dog'));
