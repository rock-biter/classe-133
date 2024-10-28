console.log('Destrutturatione Oggetti')

const owner = {
	name: 'Ginaluca Lomarco',
	age: 34,
	email: 'gianni@gmail.com',
}

const bike = {
	name: 'Bianchi Specialissima',
	weight: 6.2,
	user: owner,
}

// console.log(bike.name, bike.weight)
// const name = bike.name
// const weight = bike.weight

// const name = user.name
// const age = user.age
// const email = user.email

// const { name: userName, email } = user
// // let { age } = user

// const { name } = bike

// console.log('Bike name: ', name)
// console.log('User name:', userName)
// // console.log('User age:', age)
// console.log('User email', email)

const { user } = bike
console.log(user.name)
