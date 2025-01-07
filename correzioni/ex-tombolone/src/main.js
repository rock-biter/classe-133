import './style.css'

const numbersGrid = document.querySelector('.numbers')
const drawButton = document.getElementById('draw')
const resetButton = document.getElementById('reset')
const lastNumberEl = document.querySelector('.last-number')
console.log(numbersGrid)

let numbers = []
let numbersDrawn = []

function reset() {
	numbersGrid.innerHTML = ''
	numbers = []
	numbersDrawn = []
	drawButton.classList.remove('opacity-30')
	lastNumberEl.innerHTML = '-'

	for (let i = 0; i < 90; i++) {
		const n = i + 1
		numbers.push(n)

		numbersGrid.innerHTML += `
    <div
      class="bg-white aspect-square rounded-full flex justify-center items-center text-2xl number font-bold"
      data-number="${n}"
    >
      ${n}
    </div>
  `
	}
}

reset()

// console.log(numbers)

resetButton.addEventListener('click', reset)

drawButton.addEventListener('click', () => {
	if (numbers.length === 1) {
		drawButton.classList.add('opacity-30')
	}

	if (numbers.length === 0) {
		return
	}

	const n = drawNumber()
	numbersDrawn.push(n)
	console.log(n, numbers, numbersDrawn)

	lastNumberEl.innerHTML = n

	const numberEl = document.querySelector(`.number[data-number="${n}"]`) // Element | null
	numberEl.classList.add('drawn')
})

function drawNumber() {
	// generiamo l'inidice csuale
	const i = Math.floor(Math.random() * numbers.length) // 0 - 89
	console.log(i)

	const number = numbers[i]
	numbers.splice(i, 1)

	return number
}
