console.log('Ex-1')

const isInArray = (array, value) => {
	for (let i = 0; i < array.length; i++) {
		const el = array[i]
		console.log(el, value)
		if (el === value) {
			return true
		}
	}
	return false
}

const numeri = [5, 4, 9, 5, 6, 1, 3]
console.log(numeri)
console.log(isInArray(numeri, 5)) // true | false

const nomi = ['Gianfranco', 'Maria', 'Tommaso']
console.log(nomi)
console.log(isInArray(nomi, 'Filippo')) // true | false

// console.log(isInArray('Ciao', 'i'))

console.log('----- join -----')
// replicare il meotdo join degli array

// separtor adesso è un parametro opzionale che avrà un valore di default se non viene specificato
const joinArray = (array, separator = ',') => {
	// if (array.length === 0) return ''

	let result = '' // string
	let lastIndex = array.length - 1

	for (let i = 0; i < array.length; i++) {
		const el = array[i]

		result += el

		if (i < lastIndex) {
			result += separator
		}

		// console.log(el)
	}

	// result += array.at(-1)

	// return string
	return result
}

const message = joinArray(nomi, ', ') // 'Gianfranco, Maria, Tommaso'
console.log(message)
// const message2 = joinArray(nomi, '') // 'GianfrancoMariaTommaso'
const message3 = joinArray(nomi) // 'Gianfranco,Maria,Tommaso'
console.log(message3)
// console.log(joinArray([], 'ciao'))
