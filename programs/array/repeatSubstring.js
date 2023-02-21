const repeatSub = (str) => {
	if (str.length < 2) return false;
	let map = new Map();
	let count = 0;
	for (let i in str) {
		if (!map.has(str[i])) {
			map.set(str[i]);
			count++;
		} else {
			map.delete(str[i]);
			count--;
		}
	}

	return count === 0 ? true : false;
};

console.log(repeatSub('ababab'));
