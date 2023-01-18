const jewelsAndStones = (jewels, stones) => {
	let count = {};
	let counter = 0;
	for (let i in jewels) {
		count[jewels[i]] = count[jewels[i]] + 1 || 1;
	}
	for (let i in stones) {
		if (count[stones[i]]) {
			counter++;
		}
	}

	return counter;
};

console.log(jewelsAndStones('aA', 'aAAbbbb'));
