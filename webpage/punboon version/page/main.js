// Select the mobile menu button and the navigation list
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav ul');

// Toggle class 'active' on the nav menu when the mobile button is clicked
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active'); /* Toggles between showing and hiding the nav */
});
