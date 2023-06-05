const tasks = {
	title: 'Task List',
	tasks: [
		{
			title: 'Task 1',
			completed: true,
			tasks: [
				{
					title: 'Subtask 1.1',
					completed: true,
				},
				{
					title: 'Subtask 1.2',
					completed: false,
				},
			],
		},
		{
			title: 'Task 2',
			completed: false,
			tasks: [
				{
					title: 'Subtask 2.1',
					completed: true,
				},
			],
		},
		{
			title: 'Task 3',
			completed: true,
			tasks: [],
		},
	],
};

const countTask = (arr) => {
	return arr.tasks.reduce((answer, task) => {
		if (task.completed === true) {
			answer.push(task.title);
		}
		if (task.tasks && task.tasks.length > 0) {
			const completedSub = countTask(task);
			answer.push(...completedSub);
		}
		return answer;
	}, []);
};

console.log(countTask(tasks));
