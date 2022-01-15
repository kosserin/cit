const dropdownClicker = () => {

    const dropdownLinks = document.querySelectorAll('nav .dropdown-link');
    const body = document.querySelector('body');

    dropdownLinks.forEach(dropdownLink => {
        dropdownLink.addEventListener('click', (e) => {
            const ul = dropdownLink.nextElementSibling;
            const iTag = dropdownLink.firstElementChild;
            const nextElement = dropdownLink.parentElement.nextElementSibling
            console.log(nextElement)
            e.preventDefault();
            body.addEventListener('click', e => {
                if(e.target.className !== dropdownLink.className) {
                    ul.classList.remove('show-links')
                    iTag.classList.remove('rotate-chevron')
                    nextElement.classList.remove('add-margin');
                }
            })
            ul.classList.toggle('show-links')
            iTag.classList.toggle('rotate-chevron')
            nextElement.classList.toggle('add-margin');

        })
    })

}

const navSlide = () =>{
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.nav-burger');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('body');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('show-nav');
        burger.classList.toggle('toggle-burger');
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = "";
            } else {
                link.style.animation = `fadeIn .5s ease forwards ${index / 13 + 0}s`;
            }
        })
    })
}

const scrollItems = () => {
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');
    console.log(faders)

    const options = {
        rootMargin: "-200px 0px 0px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else{
                entry.target.classList.add('appear');
                /* appearOnScroll.unobserve(entry.target); */
                console.log('dsds')
            }
        })
    }, options);

    faders.forEach(fader => {
        appearOnScroll.observe(fader)
    })

    sliders.forEach(slider => {
        appearOnScroll.observe(slider)
    })
}
scrollItems();
navSlide();
dropdownClicker()