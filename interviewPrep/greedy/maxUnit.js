var maximumUnits = function (boxTypes, truckSize) {
	let answer = 0;
	boxTypes.sort((a, b) => b[1] - a[1]);
	for (let i = 0; i < boxTypes.length; i++) {
		let count = Math.min(boxTypes[i][0], truckSize);
		answer += count * boxTypes[i][1];
		truckSize -= count;
	}
	return answer;
};

console.log(
	maximumUnits(
		[
			[5, 10],
			[2, 5],
			[4, 7],
			[3, 9],
		],

		10
	)
);
