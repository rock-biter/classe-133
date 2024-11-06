console.log('email')

/**
 * Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
 */

const emailList = document.querySelector('.emails')
const loadMoreBtn = document.querySelector('.load-more')

// console.log(axios)
// const emails = []

function fetchEmails(root, n = 10) {
	for (let i = 0; i < n; i++) {
		axios
			.get('https://flynn.boolean.careers/exercises/api/random/mail')
			.then((res) => {
				// console.log(res)
				// console.log(res.data)
				const email = res.data.response
				// console.log(email)

				root.innerHTML += `<li>${email}</li>`

				// emails.push(email)
			})
			.catch((err) => {
				console.log(err)
			})
	}
}

fetchEmails(emailList) //

loadMoreBtn.addEventListener('click', () => {
	emailList.innerHTML = ''
	fetchEmails(emailList)
})

// console.log(emails) // qui è ancora vuoto

// emails.forEach((el) => {
// 	console.log('element array: ', el)
// })
