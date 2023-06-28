/**
 *
 * if given 2 strings and find elements of one of string in second string then
 * create new set of strings
 *  and then convert one set to array and check if another set has every char of set 1 using array.every
 */

const minWinSub = (str1, str2) => {
	if (str2.length > str1.length) return '';

	let left = 0;
	let right = 0;
	let min = Infinity;
	let minimumsub = '';

	while (right <= str1.length) {
		if (checkCharExist(str1.substring(left, right), str2)) {
			let subst = str1.substring(left, right);
			if (subst.length < min) {
				min = subst.length;
				minimumsub = subst;
			}
			left++;
		} else {
			right++;
		}
	}
	return minimumsub;
};

const checkCharExist = (s1, s2) => {
	s1 = s1.toLowerCase();
	s2 = s2.toLowerCase();
	let set1 = new Set(s1);
	let set2 = new Set(s2);
	if ([...set2].every((char) => set1.has(char))) {
		return true;
	} else {
		return false;
	}
};

console.log(minWinSub('aa', 'A'));
