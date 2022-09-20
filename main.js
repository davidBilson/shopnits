const navMenu = document.getElementById('menu');
const closeNavMenu = document.getElementById('closeNav');

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