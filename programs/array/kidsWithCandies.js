var kidsWithCandies = function (candies, extraCandies) {
	let result = [];
	let max = Math.max(...candies);

	for (let i of candies) {
		result.push(i + extraCandies >= max);
	}
	return result;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
