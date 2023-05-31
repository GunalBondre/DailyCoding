var gcdOfStrings = function (str1, str2) {
	if (str1.length < str2.length) {
		[str1, str2] = [str2, str1]; // Swap strings if necessary, so str1 is longer or equal in length to str2
	}

	let i = 0;
	let j = 0;

	// Find the common prefix in both strings
	while (i < str1.length && j < str2.length) {
		if (str1[i] !== str2[j]) {
			return '';
		}
		i++;
		j++;
	}

	// Check if the remaining part of str1 is divisible by the common prefix
	let remainingStr1 = str1.substring(i);
	if (remainingStr1.length === 0) {
		return str2; // str2 is the largest common divisor
	} else {
		return gcdOfStrings(remainingStr1, str2); // Recursively check the remaining part of str1 with str2
	}
};

console.log(
	gcdOfStrings(
		'TAUXXTAUXXTAUXXTAUXXTAUXX',
		'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX'
	)
);
