const cart = [];

const products = [
	{ id: '001', name: 'Banana', price: 20 },
	{ id: '002', name: 'Apple', price: 10 },
	{ id: '003', name: 'Papaya', price: 30 },
	{ id: '004', name: 'Orange', price: 50 },
	{ id: '005', name: 'Pear', price: 90 },
]

function addToCart(product) {
	cart.push(product);
}

// function addToCart(product) {
// 	const container = document.querySelector('.product-overview');
// 	container.innerHTML += '<div>Banana</div>'
// }

function updateView() {
	products.forEach(product => {
		const productDiv = document.createElement('div');
		productDiv.className = 'product-overview__product';
	})
}