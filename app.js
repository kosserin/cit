const dropdownClicker = () => {

    const dropdownLinks = document.querySelectorAll('nav .dropdown-link');
    const body = document.querySelector('body');

    dropdownLinks.forEach(dropdownLink => {
        dropdownLink.addEventListener('click', (e) => {
            const ul = dropdownLink.nextElementSibling;
            const iTag = dropdownLink.firstElementChild;
            const nextElement = dropdownLink.parentElement.nextElementSibling
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

const rpGalleryPreview = () => {
    const galleryImages = document.querySelectorAll('.uredjaji__uredjaji img');
    const galleryTitles = document.querySelectorAll('.uredjaji__uredjaji p');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-image');
    const modalTitle = document.querySelector('.modal h4');
    const prevBtn = document.querySelector('.modal .prev-btn');
    const nextBtn = document.querySelector('.modal .next-btn');

    let counter = 0;

    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            counter = index;
            modal.classList.add('show-modal');
            modalImg.src = galleryImages[counter].src;
            modalTitle.textContent = image.nextElementSibling.textContent;

            modal.addEventListener('click', e =>{
                if(e.target.className == 'modal show-modal') {
                    modal.classList.remove('show-modal')
                }
            })
        })
    })

    nextBtn.addEventListener('click', () => {
        if(counter>= galleryImages.length-1){
            counter=0;
        } else{
            counter++;
        }
        modalImg.src = galleryImages[counter].src;
        modalTitle.textContent = galleryImages[counter].nextElementSibling.textContent
    })

    prevBtn.addEventListener('click', () => {
        if(counter <= 0){
            counter=galleryImages.length-1;
        } else{
            counter--;
        }
        modalImg.src = galleryImages[counter].src;
        modalTitle.textContent = galleryImages[counter].nextElementSibling.textContent
    })
}

const tkGalleryPreview = () => {
    const galleryImages = document.querySelectorAll('.oprema__images img');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-image');
    const prevBtn = document.querySelector('.modal .prev-btn');
    const nextBtn = document.querySelector('.modal .next-btn');

    let counter = 0;

    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            counter = index;
            modal.classList.add('show-modal');
            modalImg.src = galleryImages[counter].src;

            modal.addEventListener('click', e =>{
                if(e.target.className == 'modal show-modal') {
                    modal.classList.remove('show-modal')
                }
            })
        })
    })

    nextBtn.addEventListener('click', () => {
        if(counter>= galleryImages.length-1){
            counter=0;
        } else{
            counter++;
        }
        modalImg.src = galleryImages[counter].src;
    })

    prevBtn.addEventListener('click', () => {
        if(counter <= 0){
            counter=galleryImages.length-1;
        } else{
            counter--;
        }
        modalImg.src = galleryImages[counter].src;
        modalTitle.textContent = galleryImages[counter].nextElementSibling.textContent
    })
}

const vestGalleryPreview = () => {
    const galleryImages = document.querySelectorAll('.gallery__container img');
    const galleryTitles = document.querySelectorAll('.gallery__container h4');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-image');
    const modalTitle = document.querySelector('.modal h4');
    const prevBtn = document.querySelector('.modal .prev-btn');
    const nextBtn = document.querySelector('.modal .next-btn');

    let counter = 0;

    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            counter = index;
            modal.classList.add('show-modal');
            modalImg.src = galleryImages[counter].src;
            modalTitle.textContent = image.nextElementSibling.textContent;

            modal.addEventListener('click', e =>{
                if(e.target.className == 'modal show-modal') {
                    modal.classList.remove('show-modal')
                }
            })
        })
    })

    nextBtn.addEventListener('click', () => {
        if(counter>= galleryImages.length-1){
            counter=0;
        } else{
            counter++;
        }
        modalImg.src = galleryImages[counter].src;
        modalTitle.textContent = galleryImages[counter].nextElementSibling.textContent
    })

    prevBtn.addEventListener('click', () => {
        if(counter <= 0){
            counter=galleryImages.length-1;
        } else{
            counter--;
        }
        modalImg.src = galleryImages[counter].src;
        modalTitle.textContent = galleryImages[counter].nextElementSibling.textContent
    })
}

if(document.querySelector('main')){
    if(document.querySelector('main').className === 'vest-page__main'){
        vestGalleryPreview();
    }
    
    if(document.querySelector('main').className === 'rp-page__main'){
        rpGalleryPreview();
    }
    
    if(document.querySelector('main').className === 'telekonferencija-page__main'){
        tkGalleryPreview();
    }

    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    const headerOptions = {};

    const headerObserver = new IntersectionObserver(function(entries, headerObserver) {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                nav.classList.add('nav-scrolled')
            } else{
                nav.classList.remove('nav-scrolled')
            }
        })
    }, headerOptions)

    headerObserver.observe(header)
}

scrollItems();
navSlide();
dropdownClicker()