function reverseInGroups(arr, n, k) {
	// code here
	let start = 0;
	let end = k;
	let ans = [];

	while (start <= end) {
		let temp = [];
		for (let i = start; i < end; i++) {
			temp.push(arr[i]);
		}
		let res = reverse(temp);
		ans.push(...res);
		start = end;
		end = end + k < arr.length ? end + k : arr.length;
	}
	return ans;
}

function reverse(arr) {
	console.log(arr, '--');
	let rev = '';
	for (let i = arr.length - 1; i >= 0; i--) {
		rev += arr[i];
	}
	console.log(rev);
	return rev.split('').join('');
}
console.log(reverseInGroups([1, 2, 3, 4, 5], 5, 3));
