var checkInclusion = function (s1, s2) {
	let windowSize = 0;
};

const checkPresence = (s1) => {
	let obj = {};

	for (let i in s2) {
		if (obj[s2[i]]) {
			obj[s2[i]] -= 1;
		}
	}
	for (let i in obj) {
		if (obj[i] > 0) return false;
	}
	return true;
};

console.log(checkInclusion('ab', 'cbaerf'));
