const newCollection = document.getElementById('newCollection');
const orders = document.getElementById('orders');
const carts = document.getElementById('carts');
const thrifts = document.getElementById('thrifts');
const join = document.getElementById('thrifts');
const vendor = document.getElementById('vendor')
const items = document.querySelectorAll('.item');
// cart item numbers
const cartNumbers = document.getElementById('cart-notification');
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

// logging products to carts
let products = [
    {
        name: 'T-SHIRTS 6-IN 100% QUALITY',
        tag: 'item_01',
        price: 129,
        inCart: 0
    },
    {
        name: 'SWEATSHIRT WOOL & LINEN LIMITED EDITION',
        tag: 'item_02',
        price: 209,
        inCart: 0
    },
    {
        name: 'NEXT-GEN CORPORATE SHIRTS',
        tag: 'item_03',
        price: 559,
        inCart: 0
    },
    {
        name: 'MODERN STOCK JEAN - NEW AGE MATERIAL',
        tag: 'item_04',
        price: 99,
        inCart: 0
    },
    {
        name: 'HAND-CRAFTED WOOL SWEATSHIRT',
        tag: 'item_05',
        price: 79,
        inCart: 0
    },
    {
        name: 'INDUSTRIAL GLOVES - ASIAN HEAVY DUTY',
        tag: 'item_06',
        price: 79.99,
        inCart: 0
    },
    {
        name: 'AFRICAN LINES - A NEW STOCK OF CULTURE',
        tag: 'item_07',
        price: 60.99,
        inCart: 0
    },
    {
        name: 'WINTER JACKET - BREATHABLE LINEN',
        tag: 'item_08',
        price: 660.99,
        inCart: 0
    },
    {
        name: 'CORPORATE LADIES WEAR COMPLETE',
        tag: 'item_09',
        price: 880.99,
        inCart: 0
    },
    {
        name: 'RARE EDITION X-R1 BAG COLLECTION',
        tag: 'item_10',
        price: 20.99,
        inCart: 0
    },
    {
        name: 'BETA COLLECTIONS MR-X SHOES',
        tag: 'item_11',
        price: 47.99,
        inCart: 0
    }
]


// USER INTERFACE FOR CARTS
// console.log(cartNumbers.textContent);

let g = addCart;
for (var i = 0, len = g.length; i < len; i++) {
    addCart[i].addEventListener('click', incrementCart);

    (function (index){
        g[i].onclick = function() {
            // alert(index);
            let productPrice = products[index].price;
            let productName = products[index].name;
            localStorage.setItem('productsInCart', productName + ' ' + '$ ' + productPrice);
            console.log(productName);
            let cartItem = localStorage.getItem('productsInCart');
            cartItem = JSON.parse(cartItem);
            console.log('My cart items are', cartItem);
            if (cartItem != null) {
                if (cartItem[products.tag] == undefined) {
                    cartItem = {
                        ...cartItem,
                        [products.tag]: products
                    }
                }
                cartItem[products.tag].inCart += 1;
                
            } else {
                products.inCart = 1;
                cartItem = {
                    [products.tag]: products
                }
            }
        }
    })(i);
}


// GETTING_CART_NUMBER_VALUE

// start func
function incrementCart(){

cartValue() //cart value called
// ADDED_TO_CART_NOTIFICATION
addedNotification.style.display = 'block';
setTimeout(() => {
addedNotification.style.display = 'none';
}, 2000);

}
// end func




 

// cart value
function cartValue() {
    let productNumbers = localStorage.getItem('My Cart Item');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('My Cart Item', productNumbers + 1);
        cartNumbers.textContent = productNumbers + 1;
    } else {
        localStorage.setItem('My Cart Item',  1);
        cartNumbers.textContent = 1;
    }

}


// Load cartnumbers
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('My Cart Item');
    if (productNumbers) {
        cartNumbers.textContent = productNumbers;
    }
}

onLoadCartNumbers();

















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