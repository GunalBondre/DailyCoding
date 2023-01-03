const palindrome = (str) => {
	if (str === '' || str.length === 1) {
		return true;
	}

	if (str.charAt(0) === str.charAt(str.length - 1)) {
		return palindrome(str.substr(1, str[str.length - 1]));
	}

	return false;
};

console.log(palindrome('kayakj'));
