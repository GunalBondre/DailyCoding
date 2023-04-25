const threesum = (arr) => {
	arr.sort((a, b) => a - b);
	if (arr.length < 3) return;
	if (arr[0] > 0) return;
	let answer = [];

	for (let i = 1; i < arr.length - 1; i++) {
		if (arr[i] > 0) break;
		if (i > 0 && arr[i] === arr[i - 1]) continue;

		let sum = 0;
		let low = i + 1;
		let high = arr.length - 1;

		while (low < high) {
			sum = arr[i] + arr[low] + arr[high];

			if (sum > 0) {
				high--;
			} else if (sum < 0) {
				low++;
			} else {
				answer.push([arr[i], arr[low], arr[high]]);
				while (arr[low] == arr[low + 1]) {
					low++;
				}
				while (arr[high] == arr[high - 1]) {
					high--;
				}
				low++;
				high--;
			}
		}
		return answer;
	}
};

console.log(threesum([-1, 0, 1, 2, -1, -4]));
