const burgerBtn = document.querySelector('.burger')
const closeMenuBtn = document.querySelector('.close-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const allMenuLinks = mobileMenu.querySelectorAll('a')

burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu--active')
})

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--active')
})

allMenuLinks.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('mobile-menu--active')
    })
})