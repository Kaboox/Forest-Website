const navLinks = document.querySelectorAll('.nav__link ');
const homeSection = document.querySelector('#home')
const aboutusSection = document.querySelector('#about-us')
const offerSection = document.querySelector('#offer')

const section = []
section.push(homeSection)
section.push(aboutusSection)
section.push(offerSection)

document.addEventListener('scroll', () => {
    section.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('nav__link--present')
                document.querySelector('.nav__link a[href*=' + id + ']').parentElement.classList.add('nav__link--present')
            })
        }


    })
})


