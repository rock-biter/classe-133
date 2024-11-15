function sum(a, b) {
	return a + b
}

function sub(a, b) {
	return a - b
}

// module.exports = sum // caso A
// module.exports = {sum, sub} // caso B
// module.exports = [sum, sub] // caso C
module.exports = { sum, sub } // caso D

// ES Modules
// export default function sum(a, b) {
// 	return a + b
// }

// export function sub(a, b) {
// 	return a - b
// }
