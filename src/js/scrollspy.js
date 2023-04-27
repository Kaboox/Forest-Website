const navLinks = document.querySelectorAll('.nav__link');


document.addEventListener('scroll', () => {
    if (window.scrollY >= 300 && window.scrollY < 1100) {
        navLinks[1].classList.add('nav__link--present')
        navLinks[2].classList.remove('nav__link--present')
        navLinks[0].classList.remove('nav__link--present')
    } else if (window.scrollY >= 1100) {
        navLinks[1].classList.remove('nav__link--present')
        navLinks[2].classList.add('nav__link--present')
        navLinks[0].classList.remove('nav__link--present')
    } else {
        navLinks[0].classList.add('nav__link--present')
        navLinks[1].classList.remove('nav__link--present')
        navLinks[2].classList.remove('nav__link--present')
    }
})

// navLinks.forEach(item => () => {
//     item.addEventListener('click', e => {
//         console.log(e);
//     })
// })