const wordpattern = (pattern, s) => {
	let words = s.split(' ');

	if (pattern.length !== words.length) {
		return false;
	}

	let charToword = {};
	let wordTochar = {};

	for (let i = 0; i < pattern.length; i++) {
		const char = pattern[i];
		const word = words[i];
		if (!charToword[char] && !wordTochar[word]) {
			charToword[char] = word;
			wordTochar[word] = char;
			console.log(charToword, wordTochar);
		} else if (charToword[char] != word || wordTochar[word] != char) {
			return false;
		}
	}

	return true;
};

console.log(wordpattern('abab', 'cat dog dog cat'));
