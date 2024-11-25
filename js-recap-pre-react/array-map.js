const messages = ['Ciao mamma', 'Errore 404', 'Prodotto creato con successo']
const todos = [
	{
		text: 'Fai quello',
		done: false,
	},
	{
		text: 'Fai anche questo',
		done: false,
	},
	{
		text: "Fai quell'altro",
		done: true,
	},
]

// map method
// const elements = messages.map((message) => `<div>${message}</div>`)

const elements = todos.map(
	(todo) => `<li class="${todo.done === true ? 'done' : ''}">${todo.text}</li>`
)

console.log(elements)
