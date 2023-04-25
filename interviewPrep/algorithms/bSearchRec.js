const bSearchRec = (arr, target, start, end) => {
	while (start < end) {
		let mid = start + Math.floor((end - start + 1) / 2);
		if (arr[mid] === target) return mid;
		if (arr[mid] > target) return bSearchRec(arr, target, start, mid - 1);
		else return bSearchRec(arr, target, mid, end);
	}
	return arr[start] === target ? start : -1;
};
let a = [-2, 1, 3, 5, 7];
console.log(bSearchRec(a, 7, 0, a.length - 1));
