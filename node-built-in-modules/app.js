// console.log('ciao')
const fs = require('node:fs')
const path = require('node:path')

// console.log(path)

const pathFile = path.join('data', 'posts')
console.log(pathFile)

const currentFile = process.argv[1] //
console.log(currentFile) // /Users/gianlucalomarco/Dev/src/boolean/classe-133/node-built-in-modules/app.js
console.log(path.basename(currentFile)) // app.js
console.log(path.extname(__filename)) // .js

// console.log(fs)
// readFile è ASYNCRONO, node va avanti senza aspettare al fine dell'operazione
// fs.readFile('index.html', (err, data) => {
// 	if (err === null) {
// 		console.log(data.toString())
// 	} else {
// 		// qui andremo a gestire l'errore
// 	}
// })

// questo lo vediamo prima della fine della lettura del file
// console.log('Dopo la lettura')

// readFileSync è sincrono quindi node aspetta di finire di leggere il contenuto del file prima di andare avanti

// try {
// 	const data = fs.readFileSync('index.htm')
// 	console.log(data.toString())
// } catch (error) {
// 	//gestire l'errore
// 	console.log(error)
// }

// console.log('dopo aver letto il file')

// fs.writeFile('about.html', '<p>Lorem ipsum dolor sit amet.</p>', (err) => {
// 	if (err) {
// 		// gestione dell'errore
// 		console.log(err)
// 	}
// })

// fetch('https://jsonplaceholder.typicode.com/posts')
// 	.then((res) => res.json())
// 	.then((data) => {
// 		console.log(data)
// 		const jsonData = JSON.stringify(data)

// 		fs.writeFile('posts.json', jsonData, (err) => {
// 			if (err) {
// 				// gestione dell'errore
// 				console.log(err)
// 			}
// 		})
// 	})

console.log('directory:', __dirname)
console.log('file:', __filename)
