var longestCommonPrefix = function (strs) {
	let hash = {};

	for (let i in strs) {
		console.log(strs[i].charAt(i));
	}

	console.log(strs);
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
