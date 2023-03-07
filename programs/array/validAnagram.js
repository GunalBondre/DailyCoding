const validAnagram = (s, t) => {
	let hash = {};
	if (s.length !== t.length) return false;
	for (let i in s) {
		hash[s[i]] = hash[s[i]] + 1 || 1;
	}
	for (let i in t) {
		if (hash[t[i]]) return true;
		else return false;
	}
};

console.log(validAnagram('anagrkam', 'nagaramk'));

module.exports = validAnagram;
