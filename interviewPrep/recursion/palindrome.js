const palindrome = (str) => {
	if (str.length == 0 || str.length == 1) return true;

	if (str.charAt(0) === str.charAt(str.length - 1)) {
		return palindrome(str.substring(1, str.length - 1));
	}
	return false;
};

console.log(palindrome('kayak'));
