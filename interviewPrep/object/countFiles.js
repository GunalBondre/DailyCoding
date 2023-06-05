const directory = {
	files: [
		{ name: 'file1.txt', type: 'file' },
		{ name: 'file2.txt', type: 'file' },
		{
			name: 'folder1',
			type: 'folder',
			files: [
				{ name: 'file3.txt', type: 'file' },
				{ name: 'file4.txt', type: 'file' },
			],
		},
		{
			name: 'folder2',
			type: 'folder',
			files: [
				{ name: 'file5.txt', type: 'file' },
				{
					name: 'folder3',
					type: 'folder',
					files: [
						{ name: 'file6.txt', type: 'file' },
						{ name: 'file7.txt', type: 'file' },
					],
				},
			],
		},
	],
};

const countfile = (directory) => {
	return directory.files.reduce((count, file) => {
		if (file.type == 'file') {
			return count + 1;
		} else if (file.type == 'folder') {
			return count + countfile(file);
		}
	}, 0);
};
console.log(countfile(directory));
