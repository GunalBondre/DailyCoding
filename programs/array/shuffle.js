var restoreString = function (s, indices) {
	let ans = [];
	for (let i in s) {
		ans[indices[i]] = s[i];
	}
	return ans.join('');
};

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));
