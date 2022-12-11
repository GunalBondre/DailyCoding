// const dailyTemp = (arr) => {
// 	let stack = [];
// 	let mainCounter = 0;
// 	let left = 0;
// 	let right = 1;
// 	while (right <= arr.length || left === right) {
// 		if (arr[left] < arr[right]) {
// 			stack.push((mainCounter += 1));
// 			left++;
// 			right = left + 1;
// 			mainCounter = 0;
// 		} else if (arr[left] > arr[right]) {
// 			mainCounter += 1;
// 			right++;
// 			if (right === arr.length) {
// 				stack.push(0);
// 			}
// 		} else if (right === arr.length) {
// 			stack.push(0);
// 			right++;
// 		}
// 	}
// 	return stack;
// };
var dailyTemperatures = function (T) {
	let stack = [];
	let res = new Array(T.length);
	for (let i = T.length - 1; i >= 0; i--) {
		while (T[i] >= T[stack[stack.length - 1]]) stack.pop();
		if (stack.length == 0) res[i] = 0;
		else res[i] = stack[stack.length - 1] - i;
		stack.push(i);
	}
	return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
