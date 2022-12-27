var countMatches = function (items, ruleKey, ruleValue) {
	for (let i in items) {
		for (let j in items[i]) {
			if (
				(ruleKey === 'type' && items[i][j] === ruleValue) ||
				(ruleKey === 'color' && items[i][j] === ruleValue) ||
				(ruleKey === 'name' && items[i][j] === ruleValue)
			) {
				return items[i];
			}
		}
	}
};

console.log(
	countMatches(
		[
			['phone', 'blue', 'pixel'],
			['computer', 'silver', 'lenovo'],
			['phone', 'gold', 'iphone'],
		],
		'type',
		'phone'
	)
);
