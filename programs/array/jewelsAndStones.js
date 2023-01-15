const jewelsAndStones = (jewels, stones) => {
	let count = 0;
	for (let i in stones) {
		for (let j in jewels) {
			if (stones[i] === jewels[j]) {
				count++;
			}
		}
	}
	return count;
};

console.log(jewelsAndStones('z', 'ZZZ'));
