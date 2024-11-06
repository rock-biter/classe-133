console.log('blog post')

/**
 * 
 * <div class="col-md-6 col-lg-4 col-xl-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make
          up the bulk of the card's content.
        </p>
        <a href="#" class="card-link">Card link</a>
      </div>
    </div>
  </div>
 */

// fare una chiamata ajax a json placeholder per recuperare 6 posts
// un volta arrivata la risposta generaimo l 'html delle card con i dati dei post e lo mettiamo dentro al DOM
// console.log(axios)

const postListEl = document.querySelector('.posts-list')
// console.log(postListEl)

const BASE_URL = 'https://jsonplaceholder.typicode.com/'
let url_body = 'posts'

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
		console.log(res)
		const posts = res.data

		appendPosts(posts, postListEl)
	})
	.catch((err) => {
		console.log(err)
	})

function appendPosts(posts, root) {
	console.log(posts, root)

	// PER OGNI posts
	//  prendiamo le proprieta dall'oggetto
	//  generate l;html della card
	//  appendiamo la card all'elemento root

	posts.forEach((post) => {
		console.log(post)
		// const body = post.body
		// const title = post.title
		const { body, title, id } = post

		const url = `posts/${id}`

		const postCardHTML = `
  <div class="col-md-6 col-lg-4 col-xl-3">
    <div class="card h-100">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">
          ${body}
        </p>
        <a href="${url}" class="card-link mt-auto">Leggi</a>
      </div>
    </div>
  </div>
    `

		root.innerHTML += postCardHTML
	})
}
