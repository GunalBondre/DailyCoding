var isIsomorphic = function (s, t) {
	let map1 = {};
	let map2 = {};
	for (let i in s) {
		if (map1[s.charAt(i)] != map2[t.charAt(i)]) {
			return false;
		}
		map1[s.charAt(i)] = i + 1;
		map2[t.charAt(i)] = i + 1;
	}
	return true;
};

const groupIsomorphic = (arr) => {
	let groups = {};
	for (let char of arr) {
		let found = false;
		for (let key in groups) {
			let res = isIsomorphic(char, key);
			if (res) {
				groups[key].push(char);
				found = true;
				break;
			}
		}
		if (!found) {
			groups[char] = [char];
		}
	}
	return Object.values(groups);
};

console.log(groupIsomorphic(['aab', 'xxy', 'xyz', 'abc', 'def', 'xyx']));
