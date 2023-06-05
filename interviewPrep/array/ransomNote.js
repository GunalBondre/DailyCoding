/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	let hashmap = {};

	for (let str of magazine) {
		hashmap[str] = hashmap[str] + 1 || 1;
	}

	for (let i in ransomNote) {
		hashmap[ransomNote[i]] = hashmap[ransomNote[i]] - 1;
	}
	for (let char in hashmap) {
		if (hashmap[char] == 0) return true;
	}
	return false;
};

console.log(canConstruct('aa', 'aba'));
