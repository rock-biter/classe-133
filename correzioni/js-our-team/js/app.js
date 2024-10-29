const teamMembers = [
	{
		name: 'Marco Bianchi',
		role: 'Designer',
		email: 'marcobianchi@team.com',
		img: 'img/male1.png',
	},
	{
		name: 'Laura Rossi',
		role: 'Front-end Developer',
		email: 'laurarossi@team.com',
		img: 'img/female1.png',
	},
	{
		name: 'Giorgio Verdi',
		role: 'Back-end Developer',
		email: 'giorgioverdi@team.com',
		img: 'img/male2.png',
	},
	{
		name: 'Marta Ipsum',
		role: 'SEO Specialist',
		email: 'martarossi@team.com',
		img: 'img/female2.png',
	},
	{
		name: 'Roberto Lorem',
		role: 'SEO Specialist',
		email: 'robertolorem@team.com',
		img: 'img/male3.png',
	},
	{
		name: 'Daniela Amet',
		role: 'Analyst',
		email: 'danielaamet@team.com',
		img: 'img/female3.png',
	},
]

/*
<div class="col-4">
  <div class="team-card">
    <figure class="team-card__thumb">
      <img src="./img/female1.png" alt="" />
    </figure>
    <div class="team-card__info">
      <h3 class="team-name">Marco Bianchi</h3>
      <p class="team-job">Designer</p>
      <a class="team-email" href="mailto:marcobianchi@gmail.com"
        >marcobianchi@gmail.com</a
      >
    </div>
  </div>
</div>
*/

const teamsRowElement = document.querySelector('.teams .row')
console.log(teamsRowElement)

renderTeamMembers(teamMembers, teamsRowElement)

function getTeamCardHTML(member) {
	const { name, role, img, email } = member

	const teamCardHTML = `
  <div class="col-4">
    <div class="team-card">
      <figure class="team-card__thumb">
        <img src="${img}" alt="" />
      </figure>
      <div class="team-card__info">
        <h3 class="team-name">${name}</h3>
        <p class="team-job">${role}</p>
        <a class="team-email" href="mailto:${email}"
          >${email}</a
        >
      </div>
    </div>
  </div>
`

	return teamCardHTML
}

function renderTeamMembers(members, root) {
	root.innerHTML = ''

	for (let i = 0; i < members.length; i++) {
		root.innerHTML += getTeamCardHTML(members[i])
		// console.log(member)
	}
}

// prendere il rifemento degli input del button di submit
const inputName = document.getElementById('name')
const inputRole = document.getElementById('role')
const inputEmail = document.getElementById('email')
const inputImg = document.getElementById('img')
const submitEl = document.getElementById('add-team-member')

// console.log(inputEmail, inputImg, inputName, inputRole, submitEl)

submitEl.addEventListener('click', function () {
	console.log('aggiungere un nuovo membro')

	const name = inputName.value // string
	const role = inputRole.value // string
	const img = inputImg.value // string
	const email = inputEmail.value // string

	if (!name || !role || !img || !email) {
		alert('Compila correttamente il form!')
		return
	}

	console.log(name, email, img, role)

	const newTeamMember = {
		name,
		role,
		img,
		email,
	}

	// console.log(newTeamMember)

	teamMembers.push(newTeamMember)

	renderTeamMembers(teamMembers, teamsRowElement)
	// teamsRowElement.innerHTML += getTeamCardHTML(newTeamMember)

	console.log(teamMembers)
})
