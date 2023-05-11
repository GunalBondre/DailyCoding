const { SearchSource } = require('jest');

const data = [
	{
		id: '1',
		name: 'Alice',
		age: 27,
		email: 'alice@example.com',
		friends: ['2', '3'],
	},
	{
		id: '2',
		name: 'Bob',
		age: 32,
		email: 'bob@example.com',
		friends: ['1', '3'],
	},
	{
		id: '3',
		name: 'Charlie',
		age: 25,
		email: 'charlie@example.com',
		friends: ['1', '2'],
	},
	{
		id: '4',
		name: 'David',
		age: 29,
		email: 'david@example.com',
		friends: ['2'],
	},
];

const searchUser = (userData, searchTerm) => {
	let result = userData.filter((item) => {
		if (item.name.includes(searchTerm) || item.email.includes(searchTerm)) {
			return item;
		}
	});
	return result;
};

console.log(searchUser(data, 'char'));
