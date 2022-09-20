// 
const addedNotification = document.getElementById('added');
function itemAddedNotification(){

    addedNotification.style.display = 'block';
    setTimeout(() => {
    addedNotification.style.display = 'none';
    }, 2000);
    
    }


// product objects go here
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


// select all add to cart button
const carts = document.querySelectorAll('.add-cart-btn');
console.log(carts)

// looping through all  the add to cart buttons
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        // notification that item has been added to cart
        itemAddedNotification();

        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

// onload cart numbers when u just load a page, check the local storage and let the value sta put on the cart-notification
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        // grab cart-notification number
        document.querySelector('#cartNum').textContent = productNumbers;
    }
}


// lets know how many items are in cart
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        // update number of items in cart at the navbar with this selector, the id="cart-notification"
        document.querySelector('#cartNum').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        // update number of items in cart at the navbar with this selector, the id="cart-notification"
        document.querySelector('#cartNum').textContent = 1;
    }
    setItems(product);

}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log('my cartItems are', cartItems)

    if (cartItems != undefined) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    product.inCart = 1;
    cartItems = {
        ...cartItems,
                [product.tag]: product
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseInt(cartCost); 
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price)
    }

}


function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector('#products-container');

    let cartCost = localStorage.getItem('totalCost');
    console.log('this is the new' + cartItems);

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class='product'>
            <span class='del-item-btn item-btn-col' >&times;</span>
            <span>${item.name}</span>
            </div>

            <div class='price' >${item.price}</div>

            <div class='quantity'>
            <span class='decrease item-btn-col'>-</span>
            <span>${item.inCart}</span>
            <span class='increase item-btn-col'>+</span>
            </div>

            <div class='total'>
            $${item.inCart + item.price}.00
            </div>
            `
        });

        productContainer.innerHTML += `
            <div class='basketTotalContainer'>
            <h4 class='basketTotalTitle'>
                basket Total
            </h4>

            <h4  class='basketTotal'>
            $${}
            </h4>
            </div>
        `

    }

}

onLoadCartNumbers();
displayCart();

// i stopped at 17:53