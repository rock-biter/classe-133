// console.log('hello node come stai?')
// importando axios con CommonJS
const axios = require('axios')

// const sum = require('./functions.js') // caso A
// const fn = require('./functions.js') // caso B
// const [sum, sub] = require('./functions.js') // caso C
const { sum, sub } = require('./functions.js') // caso D

// import { sum, sub } from './functions.js' // caso D con ES Modules
// import fn from './functions.js' // fn <= sum perche è l'export default

// ES Modules
// console.log(fn)

// importando axios con ES Modules
// import axios from 'axios'

// console.log(axios)
// const endpoint = 'https://jsonplaceholder.typicode.com/posts'

// axios
// 	.get(endpoint, {
// 		params: {
// 			_limit: 10,
// 		},
// 	})
// 	.then((res) => {
// 		console.log(res.data)
// 		// console.log(fn(10, 20)) CASO B ES Modules
// 		console.log(sum(4, 5))
// 		console.log(sub(20, 10))
// 	})
