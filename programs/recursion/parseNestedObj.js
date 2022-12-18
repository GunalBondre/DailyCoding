const array = [
	{
		key1: 'dog',
		key2: 'cat',
	},
	{
		key1: 'dog',
		key2: 'cat',
		key3: [
			{
				keyA: 'mouse',
				keyB: 'https://myURL.com/path/to/file/1',
				keyC: [
					{
						keyA: 'tiger',
						keyB: 'https://myURL.com/path/to/file/2',
					},
				],
			},
		],
	},
	{
		key4: 'dog',
		key5: 'https://myURL.com/path/to/file/3',
	},
];

const searchTerm = 'https://myURL.com';
let result = [];

const parseObj = (element) => {
	element.forEach((item) => {
		searchItem(item);
	});

	return result;
};

const searchItem = (item) => {
	Object.keys(item).forEach((key) => {
		if (typeof item[key] === 'object') {
			searchItem(item[key]);
		}
		if (typeof item[key] === 'string') {
			let searchRegEx = new RegExp(searchTerm, 'gi');
			if (item[key].match(searchRegEx)) {
				result.push(item[key]);
			}
		}
	});
};

console.log(parseObj(array));
