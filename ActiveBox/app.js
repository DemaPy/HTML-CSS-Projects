// FIX NAVBAR
const nav = document.querySelector('.header')
const inner = document.querySelector('.header__inner')

function fixed() {
    if (window.scrollY > 750) {
        nav.classList.add('sticky')
        inner.classList.add('border')
    } else {
        nav.classList.remove('sticky')
        inner.classList.remove('border')
    }
}

window.addEventListener('scroll', fixed)

// BURGER
const btn = document.querySelector('.burger')
const navLinkBox= document.querySelector('.header__nav')

function onClick() {
    navLinkBox.classList.toggle('show')
}

// HIDE NAV WHILE SCROLLING
function onScroll() {
    navLinkBox.classList.remove('show')
}

btn.addEventListener('click', onClick)
window.addEventListener('scroll', onScroll)

// SCROLL TO SPECIFY SECTION
const navFeatures = document.querySelector('.nav__link')

function findPos() {
    document.querySelector('#intro_id').scrollIntoView({behavior: 'smooth'})
}

navFeatures.addEventListener('click', findPos)

const navWorks = document.querySelector('.nav__link:nth-child(2)')

function findPos2() {
    document.querySelector('#works').scrollIntoView({behavior: 'smooth'})
}

navWorks.addEventListener('click', findPos2)

const navTeam = document.querySelector('.nav__link:nth-child(3)')

function findPos3() {
    document.querySelector('#team').scrollIntoView({behavior: 'smooth'})
}

navTeam.addEventListener('click', findPos3)

const navReview= document.querySelector('.nav__link:nth-child(4)')

function findPos4() {
    document.querySelector('#review').scrollIntoView({behavior: 'smooth'})
}

navReview.addEventListener('click', findPos4)

const navDownload = document.querySelector('.nav__link:nth-child(5)')

function findPos5() {
    document.querySelector('#download').scrollIntoView({behavior: 'smooth'})
}

navDownload.addEventListener('click', findPos5)
