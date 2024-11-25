// const todo = {
// 	text: "Fai quell'altro",
// 	done: false,
// 	setCompleted(value) {
// 		this.done = value
// 	},
// }

// const todos = [
// 	{
// 		id: 65,
// 		text: 'Fai quello',
// 		done: false,
// 		setCompleted(value) {
// 			this.done = value
// 		},
// 	},
// 	{
// 		id: 24,
// 		text: 'Fai anche questo',
// 		done: false,
// 		setCompleted(value) {
// 			this.done = value
// 		},
// 	},
// 	{
// 		id: 3,
// 		text: "Fai quell'altro",
// 		done: true,
// 		setCompleted(value) {
// 			this.done = value
// 			console.log(this)
// 		},
// 	},
// ]

// const todo = todos.find((todo) => todo.id === 3)

// todo ? todo.setCompleted(false) : console.log('todo not found')

// if (todo) {
// 	todo.setCompleted(true)

// 	console.log(todo)
// } else {
// 	console.log('todo not found')
// }

// console.log(todo)

// message = 'Todo completata' | 'Todo non completata'
// let message = ''
// if (todo.done === true) {
// 	message = 'Todo completata'
// } else {
// 	message = 'Todo non completata'
// }

// function log(text) {
// 	console.log(text)
// }

const message = todo.done === true ? 'Todo completata' : 'Todo non completata'

// log(todo.done === true ? 'Todo completata' : 'Todo non completata')

// console.log(message)

function getName() {
	return 'Giangi'
}

function getLastName() {
	return 'Lomarco'
}

const propName = 'name'

const value = propName === 'name' ? getName() : getLastName()

// let value = ''
// if (propName === 'name') {
// 	value = getName()
// } else {
// 	value = getLastName()
// }

console.log(value)
