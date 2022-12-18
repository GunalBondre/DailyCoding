const animals = [
	{
		id: 1,
		type: 'cat',
		pets: [
			{ id: 1, name: 'Toby', breed: 'Tabby' },
			{ id: 2, name: 'Golden Girl', breed: 'Russian Blue' },
		],
	},
	{
		id: 2,
		type: 'dog',
		pets: [{ id: 3, name: 'Goldilocks', breed: 'Poodle' }],
	},
	{
		id: 3,
		type: 'fish',
		pets: [{ id: 4, name: 'Marigold', breed: 'Goldfish' }],
	},
];

let result = [];
const searchTerm = 'gold';

const findData = (animals) => {
	animals.forEach((element) => {
		searchItem(element);
	});
	let uniqueResults = [...new Set(result)];
	return uniqueResults.length;
};

const searchItem = (item) => {
	console.log(item);
	Object.keys(item).forEach((key) => {
		if (typeof item[key] === 'object') {
			searchItem(item[key]);
		}
		if (typeof item[key] === 'string') {
			let searchReg = new RegExp(searchTerm, 'gi');
			if (item[key].match(searchReg)) {
				result.push(item.id);
			}
		}
	});
};

console.log(findData(animals));
