const pizzas = [
	{
		id: 1,
		name: 'Margherita',
		price: 6,
		image: 'imgs/pizze/margherita.webp',
		ingredients: ['pomodoro', 'mozzarella'],
		isAvailable: true,
	},
	{
		id: 2,
		name: 'Marinara',
		price: 6,
		image: 'imgs/pizze/marinara.jpeg',
		ingredients: ['pomodoro', 'aglio', 'origano'],
		isAvailable: true,
	},
	{
		id: 3,
		name: 'Diavola',
		price: 7,
		image: 'imgs/pizze/diavola.jpeg',
		ingredients: ['pomodoro', 'mozzarella', 'salame piccante'],
		isAvailable: true,
	},
	{
		id: 4,
		name: 'Bufalina',
		price: 8,
		image: 'imgs/pizze/bufalina.jpeg',
		ingredients: ['pomodoro', 'mozzarella di bufala'],
		isAvailable: true,
	},
	{
		id: 5,
		name: '4 formaggi',
		price: 6,
		image: 'imgs/pizze/4_formaggi.jpeg',
		ingredients: [
			'pomodoro',
			'mozzarella',
			'gorgonzola',
			'parmigiano',
			'ricotta',
		],
		isAvailable: false,
	},
]

module.exports = pizzas
