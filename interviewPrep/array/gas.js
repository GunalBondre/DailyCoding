const canCommute = (gas, cost) => {
	let start = 0;
	let tank = 0;
	let commute = 0;

	for (let i = 0; i < gas.length; i++) {
		tank += gas[i] - cost[i];
		commute += gas[i] - cost[i];
		if (commute < 0) {
			commute = 0;
			start = i + 1;
		}
	}

	return tank < 0 ? -1 : start;
};

console.log(canCommute([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
