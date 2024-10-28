console.log('EX 03')

/**
 * Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
 */

function sliceArray(elements, start, end) {
	/**
	 * Controlli:
	 * elements must be an array
	 * start, end must be a number (integer)
	 */
	if (!Array.isArray(elements)) {
		console.error('Elements must be array')
		return
	}

	if (isNaN(start)) {
		console.error('Start is not a number')
		return
	}

	if (isNaN(end)) {
		console.error('End is not a number')
		return
	}

	// start >= 0
	start = Math.max(start, 0)
	// if (start < 0) {
	// 	start = 0
	// }

	// end <= elements.length
	end = Math.min(end, elements.length)
	// if (end > elements.length) {
	// 	end = elements.length
	// }

	const result = []

	for (let i = start; i < end; i++) {
		const el = elements[i]
		// console.log(i, el)

		result.push(el)
	}

	return result
}

const numbers = [4, 6, 5, 9, 7, 8, 6, 1, 2]
console.log(numbers)
// numbers.slice(3,6)

const newNumbers = sliceArray(numbers, 2, 4) // [9,7,8]
console.log(newNumbers)

// sliceArray([1, 2, 3], 'ciao', 12)
