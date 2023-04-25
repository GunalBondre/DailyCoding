var simplifyPath = function (path) {
	path = path.split('/');
	let stack = [];

	for (let i in path) {
		if (path[i] == '.' || path[i] == '') continue;
		if (path[i] === '..') stack.pop();
		else stack.push(path[i]);
	}
	return '/' + stack.join('/');
};

console.log(simplifyPath('/home/../file'));
