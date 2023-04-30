const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.scrollspy')



document.addEventListener('scroll', () => {
    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('nav-link--present')
                document.querySelector('.nav-link a[href*=' + id + ']').parentElement.classList.add('nav-link--present')
            })
        }


    })
})


