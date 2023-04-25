const burgerBtn = document.querySelector('.burger')
const closeMenuBtn = document.querySelector('.close-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const allMenuLinks = mobileMenu.querySelectorAll('a')
const currentYear = document.querySelector('.year')
const body = document.querySelector('body')

currentYear.textContent = new Date().getFullYear();

burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu--active')
    body.style.overflowY = 'hidden'
})

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--active')
    body.style.overflowY = 'auto'
})

allMenuLinks.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('mobile-menu--active')
        body.style.overflowY = 'auto'
    })
})