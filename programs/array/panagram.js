var checkIfPangram = function (sentence) {
	let Alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let hash = {};

	for (let i in Alphabet) {
		hash[Alphabet[i]] = hash[Alphabet[i]] + 1 || 1;
	}

	for (let i in sentence) {
		if (hash[sentence[i]]) {
			hash[sentence[i]] -= 1;
		}
	}
	console.log(hash);
	for (let i in hash) {
		if (hash[i] > 0) return false;
	}
	return true;
};

console.log(checkIfPangram('anmt'));
