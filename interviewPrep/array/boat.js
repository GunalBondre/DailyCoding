var numRescueBoats = function (people, limit) {
	people = people.sort((a, b) => a - b);
	let count = 0;
	let left = 0;
	let right = people.length - 1;

	while (left <= right) {
		let sum = people[left] + people[right];
		if (sum <= limit) {
			count++;
			left++;
			right--;
		} else {
			count++;
			right--;
		}
	}
	return count;
};

console.log(numRescueBoats([3, 5, 3, 4], 5));
