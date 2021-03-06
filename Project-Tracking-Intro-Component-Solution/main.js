const toggledNav = document.querySelector('.nav-toggled');
const hamburgerButton = document.querySelector('.hamburger');
const closeButton = document.querySelector('.close');

hamburgerButton.addEventListener('click',()=>{
    toggledNav.classList.remove('hide');
    closeButton.classList.remove('hide');
    hamburgerButton.classList.add('hide');
})
closeButton.addEventListener('click',()=>{
    hamburgerButton.classList.remove('hide');
    toggledNav.classList.add('hide');
    closeButton.classList.add('hide');
})