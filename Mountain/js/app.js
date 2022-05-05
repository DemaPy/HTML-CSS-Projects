const burger = document.querySelector('.burger')
const nav = document.querySelector('.mobile__nav')



burger.addEventListener('click', () => {
    console.log('kurwa');
    nav.classList.toggle('mobile__nav__active')
})