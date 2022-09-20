let totalAmountPay = document.getElementById('totalAmountPay');
let cartCost = localStorage.getItem('totalCost');

totalAmountPay.textContent = `$` + cartCost