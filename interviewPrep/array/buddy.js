var buddyStrings = function (s, goal) {
	if (s.length !== goal.length) return false;

	console.log(s.split('').sort().join('') === goal.split('').sort().join(''));
};
console.log(buddyStrings('ab', 'ba'));
