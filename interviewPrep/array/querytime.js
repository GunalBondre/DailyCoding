/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
	let interval = [];
	let start = 0;
	while (start < startTime.length) {
		let temp = [];
		for (let i = startTime[start]; i <= endTime[start]; i++) {
			temp.push(i);
		}
		interval.push(temp);
		start++;
	}
	let count = 0;
	for (let i in interval) {
		if (interval[i].includes(queryTime)) count++;
	}

	return count;
};

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4));
