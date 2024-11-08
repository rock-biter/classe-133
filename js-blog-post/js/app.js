console.log('blog post')

// fare una chiamata ajax a json placeholder per recuperare 6 posts
// un volta arrivata la risposta generaimo l 'html delle card con i dati dei post e lo mettiamo dentro al DOM
// console.log(axios)

const postListEl = document.querySelector('.posts-list')
const closeBtn = document.querySelector('.gallery-overlay .close')
const overlayEl = document.querySelector('.gallery-overlay')
const overlayImgEl = document.querySelector('.gallery-overlay img')
// console.log(closeBtn, overlayEl)

function toggleOverlay() {
	overlayEl.classList.toggle('d-none')
	document.body.classList.toggle('overflow-hidden')
}

overlayEl.addEventListener('click', (event) => {
	console.dir(event.target)
	// if (event.target !== overlayImgEl) {
	// 	toggleOverlay()
	// }
	if (event.target === overlayEl) {
		toggleOverlay()
	}
})

// overlayImgEl.addEventListener('click', (event) => {
// 	event.stopPropagation()
// })

closeBtn.addEventListener('click', (event) => {
	event.stopPropagation()
	console.log('click btn')
	// approccio con classe
	toggleOverlay()
	// approccio con stile inline
	// overlayEl.style.display = 'none'
})

const BASE_URL = 'https://jsonplaceholder.typicode.com/'
let url_body = 'photos'

// const endpoint = BASE_URL + url_body + '?_limit=6'
const endpoint = BASE_URL + url_body
console.log(endpoint)

axios
	.get(endpoint, {
		params: {
			_limit: 6,
		},
	})
	.then((res) => {
		// console.log(res)
		const photos = res.data

		appendCards(photos, postListEl)
	})
	.catch((err) => {
		console.log(err)
	})

function appendCards(photos, root) {
	photos.forEach((photo) => {
		// console.log(photo)

		const { title, url } = photo
		// console.log(title, url)

		const photoCardHTML = `
		<div class="col-md-6 col-lg-4 col-xl-3">
		  <div class="card h-100">
				<img src="${url}" class="card-img-top" alt="${title}">
		    <div class="card-body d-flex flex-column">
		      <h5 class="card-title">${title}</h5>
		    </div>
		  </div>
		</div>
		  `

		root.innerHTML += photoCardHTML
	})

	const cardsCollection = document.querySelectorAll('.card')
	// console.log(cardsCollection)

	cardsCollection.forEach((card, i) => {
		// console.log(card)

		card.addEventListener('click', () => {
			// console.log('click sulla card')
			// overlayEl.classList.remove('d-none')
			toggleOverlay()
			const { url } = photos[i]
			// console.log(url, overlayImgEl)
			overlayImgEl.src = url
			// sostituire l'src dell'immagine ell'overlay
		})
	})
}
