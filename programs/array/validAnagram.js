const validAnagram = (s, t) => {
	let hash = {};

	for (let i in s) {
		hash[s[i]] = hash[s[i]] + 1 || 1;
	}
	for (let i in t) {
		if (hash[t[i]]) hash[t[i]] -= 1;
		else return false;
	}
	return true;
};

console.log(validAnagram('anagram', 'nagaram'));

module.exports = validAnagram;
