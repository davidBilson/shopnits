const newCollection = document.getElementById('newCollection');
const orders = document.getElementById('orders');
const carts = document.getElementById('carts');
const thrifts = document.getElementById('thrifts');
const join = document.getElementById('thrifts');
const vendor = document.getElementById('vendor')
const items = document.querySelectorAll('.item');
const cartNotification = document.getElementById('cart-notification');
const cartClick = document.getElementById('carts');
const addCart = document.querySelectorAll('.add-cart-btn');
const addedNotification = document.getElementById('added');
const navMenu = document.getElementById('menu');
const closeNavMenu = document.getElementById('closeNav');

// EVENTS LISTENERS
newCollection.addEventListener('click', function() {
alert('New Collection');
});

orders.addEventListener('click', function() {
alert('Orders');
});

carts.addEventListener('click', function() {
alert('carts')
})

// USER INTERFACE
console.log(cartNotification.textContent);

addCart.forEach((btn)=>{
btn.addEventListener("click", incrementCart);
});

let value = 0;

function incrementCart(){
value ++;
cartNotification.textContent = value;
console.log(cartNotification.textContent);
addedNotification.style.display = 'block';

setTimeout(() => {
addedNotification.style.display = 'none';
}, 2000);

}


// Navigation
navMenu.addEventListener('click', () => {
const navigation = document.getElementById('nav-section');
navigation.style.visibility = 'visible';
navMenu.style.display = 'none';
closeNavMenu.style.display = 'block';
});

closeNavMenu.addEventListener('click', () => {
const navigation = document.getElementById('nav-section');
navigation.style.visibility = 'hidden';
navMenu.style.display = 'block';
closeNavMenu.style.display = 'none';
})