/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
	let left = 0;
	let right = 0;
	let charCount = 0;
	s = s.split('');
	while (right < s.length) {
		if (s[right] === goal[left] && left !== right) {
			let temp = s[right];
			s[right] = s[left];
			s[left] = temp;
			charCount++;
		} else {
			right++;
		}
		if (charCount > 1) break;
	}
	if (s.join('') === goal) {
		return true;
	}
	return false;
};

console.log(buddyStrings('ab', 'ab'));
