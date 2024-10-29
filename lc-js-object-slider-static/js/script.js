// # Fase di preparazione
//  Preparo i dati su cui basare il carosello
const pics = [
	{
		image: 'img/01.jpg',
		title: 'Svezia',
		text: "Scandinavia's blend of nature and innovation.",
	},
	{
		image: 'img/02.jpg',
		title: 'Norvegia',
		text: 'Fjords, mountains, and coastal charm in Nordic splendor.',
	},
	{
		image: 'img/03.jpg',
		title: 'Alaska',
		text: 'Untamed wilderness and rugged beauty in the Last Frontier.',
	},
	{
		image: 'img/04.jpg',
		title: 'Gran Canyon',
		text: "Nature's masterpiece, a colorful tapestry of cliffs.",
	},
	{
		image: 'img/05.jpg',
		title: 'Skyrim',
		text: 'Epic Nordic fantasy with dragons and ancient magic.',
	},
]

console.log(pics)

// conserva l'informazione di quale sia la slide attiva
let currentSlideIndex = 0 // number [0 : pics.length - 1]

const carouselEl = document.getElementById('carousel')

const galleryElement = carouselEl.querySelector('.gallery') // Object | null
const thumbnailsElement = carouselEl.querySelector('.thumbnails') // Object | null
console.log(galleryElement, thumbnailsElement)

for (let i = 0; i < pics.length; i++) {
	const slide = pics[i]

	const { title, text, image } = slide

	console.log(i, currentSlideIndex, slide)

	// let className = ''

	// if (currentSlideIndex === i) {
	// 	// console.log('questa è la slide attiva')
	// 	className = 'active'
	// }

	const className = currentSlideIndex === i ? 'active' : ''

	const slideHtml = `
  <figure class="slide ${className}">
    <figcaption>
      <h2>${title}</h2>
      <h3>${text}</h3>
    </figcaption>
    <img alt="${title}" src="${image}" />
  </figure>
`
	galleryElement.innerHTML = galleryElement.innerHTML + slideHtml

	const slideThumbHTML = `
  <figure class="thumb ${className}">
    <img src="${image}" alt="" />
  </figure>
  `

	thumbnailsElement.innerHTML += slideThumbHTML
}

// console.log(prevSlideEl, nextSlideEl)
// NB dobbiamo ecuiperare i due pulsanti DOPO AVERE GENERATO LE SLIDE
const prevSlideEl = carouselEl.querySelector('.control.prev')
const nextSlideEl = carouselEl.querySelector('.control.next')

const slideElements = carouselEl.querySelectorAll('.slide')
const thumbnailElements = carouselEl.querySelectorAll('.thumb')
// console.log(slideElements)
const lastAvailableIndex = slideElements.length - 1

prevSlideEl.addEventListener('click', prevSlide)

nextSlideEl.addEventListener('click', nextSlide)

function goToSlide(index) {
	const currentSlide = slideElements[currentSlideIndex]
	const currentThumb = thumbnailElements[currentSlideIndex]
	currentSlide.classList.remove('active')
	currentThumb.classList.remove('active')
	// console.log(currentSlide)

	currentSlideIndex = index

	const nextSlide = slideElements[currentSlideIndex]
	const nextThumb = thumbnailElements[currentSlideIndex]

	nextSlide.classList.add('active')
	nextThumb.classList.add('active')
	// console.log(nextSlide)
}

function nextSlide() {
	const newSlideIndex =
		currentSlideIndex === lastAvailableIndex ? 0 : currentSlideIndex + 1

	goToSlide(newSlideIndex)
}

function prevSlide() {
	const newSlideIndex =
		currentSlideIndex === 0 ? lastAvailableIndex : currentSlideIndex - 1

	goToSlide(newSlideIndex)
}

for (let i = 0; i < thumbnailElements.length; i++) {
	const thumbElement = thumbnailElements[i]

	console.log(thumbElement)

	thumbElement.addEventListener('click', () => {
		// console.log(thumbElement, i)
		goToSlide(i)
	})
}

setInterval(() => {
	nextSlide()
}, 3000)
