const isPalindrom = (str) => {
	if (str === '' || str.length === 1) return true;

	if (str.charAt(0) === str.charAt(str.length - 1)) {
		return isPalindrom(str.substr(1, str[str.length - 1]));
	}
	return false;
};

console.log(isPalindrom('kayak'));
