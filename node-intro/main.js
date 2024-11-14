// setTimeout(() => {
// 	console.log('Ciao dopo 2 s')
// }, 2000)

// fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
// 	.then((res) => res.json())
// 	.then((data) => console.log(data))
const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/todos?_limit=6').then((res) => {
	const todos = res.data.map((todo) => {
		return {
			title: todo.title,
			done: todo.completed,
			id: todo.id,
		}
	})
	console.log(todos)
})
