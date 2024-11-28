import margheritaSrc from './assets/margherita.webp'
import marinaraSrc from './assets/marinara.jpeg'
import diavolaSrc from './assets/diavola.jpeg'
import bufalinaSrc from './assets/bufalina.jpeg'
import formaggi4Src from './assets/4_formaggi.jpeg'

const pizzas = [
	{
		id: 1,
		name: 'Margherita',
		image: margheritaSrc,
		ingredients: ['pomodoro', 'mozzarella'],
		price: 7,
		isAvailable: true
	},
	{
		id: 2,
		name: 'Marinara',
		image: marinaraSrc,
		ingredients: ['pomodoro', 'aglio', 'origano'],
		price: 6,
		isAvailable: true
	},
	{
		id: 3,
		name: 'Diavola',
		image: diavolaSrc,
		ingredients: ['pomodoro', 'mozzarella', 'salame piccante'],
		price: 8,
		isAvailable: false
	},
	{
		id: 4,
		name: 'Bufalina',
		image: bufalinaSrc,
		ingredients: ['pomodoro', 'mozzarella di bufala'],
		price: 9,
		isAvailable: true
	},
	{
		id: 5,
		name: '4 formaggi',
		image: formaggi4Src,
		ingredients: [
			'pomodoro',
			'mozzarella',
			'gorgonzola',
			'parmigiano',
			'ricotta',
		],
		price: 8,
		isAvailable: false
	},
	{
		id: 6,
		name: 'Calzone',
		image: undefined,
		ingredients: [
			'pomodoro',
			'mozzarella',
			'prosciutto',
		],
		price: 10,
		isAvailable: true
	},
]

export default pizzas
