let longestPalindrome = function (string) {
	let leftPointer = 0;
	let distanceFromLeftToRightPointer = string.length - 1;
	let rightPointer = distanceFromLeftToRightPointer;

	while (leftPointer < rightPointer) {
		if (isPalindrome(leftPointer, rightPointer, string)) {
			return string.slice(leftPointer, rightPointer + 1);
		}

		leftPointer++;
		rightPointer++;

		if (rightPointer === string.length) {
			leftPointer = 0;
			distanceFromLeftToRightPointer--;
			rightPointer = distanceFromLeftToRightPointer;
		}
	}

	return string[0];
};

function isPalindrome(leftPointer, rightPointer, string) {
	while (leftPointer < rightPointer) {
		if (string[leftPointer] !== string[rightPointer]) {
			return false;
		}

		leftPointer++;
		rightPointer--;
	}

	return true;
}
console.log(longestPalindrome('abacdef'));
