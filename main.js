const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
} 

const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

    const scrollHeader = () =>{
        const header = document.getElementById('header');
        this.scrollY >= 50 ? header.classList.add('scroll-header')
                            : header.classList.remove('scroll-header');
    }
    window.addEventListener('scroll', scrollHeader);
// Initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
    // Tabs swiper
    const swiperTabs = new Swiper('.menu__tabs', {
        slidesPerView: 'auto',
        spaceBetween: 12,
        freeMode: true,
        watchSlidesProgress: true,
    });

    // Content swiper with thumbs control
    const swiperMenu = new Swiper('.menu__content', {
        loop: false,
        spaceBetween: 32,
        thumbs: {
            swiper: swiperTabs,
        },
    });
});

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1500,
    delay: 300,
    easing: 'cubic-bezier(0.34, 1.56 , 0.64, 1)',
});

sr.reveal('.home__title', {origin: 'top'})
sr.reveal('.home__description', {delay: 600, origin: 'top'})
sr.reveal('.home__data .button', {delay: 900, distance: 0, scale: 0, origin: 'top'})
sr.reveal('.home__blob', {delay: 900, distance: '100px'})
sr.reveal('.home__images img', {delay: 1200, distance: 0, interval: 200, scale: 0})
sr.reveal('.home__data img', {delay: 1500, distance: 0, interval: 200, scale: 0})
sr.reveal('.home__text', {delay: 2100, distance: '120px'})

sr.reveal('.about__data .section__title')
sr.reveal('.about__data .section__subtitle', {delay: 600})
sr.reveal('.about__description', {delay: 900})
sr.reveal('.about__data .button', {delay: 1200, distance: 0, scale: 0})
sr.reveal('.about__blob', {delay: 1200, origin: 'left'})
sr.reveal('.about__img', {delay: 1500, origin: 'right'})
sr.reveal('.about__data img', {delay: 1800, distance: 0, interval: 200, scale: 0})
sr.reveal('.about__text', {delay: 2100})

sr.reveal('.menu__button', {interval: 100})
sr.reveal('.menu__content', {delay: 600})
sr.reveal('.menu__text-1', {delay: 900, origin: 'top'})
sr.reveal('.menu__text-2', {delay: 1200})

sr.reveal('.new__data .section__title')
sr.reveal('.new__data .section__subtitle', {delay: 600})
sr.reveal('.new__description', {delay: 900})
sr.reveal('.new__blob', {delay: 900, origin: 'right'})
sr.reveal('.new__images img', {delay: 1200, distance: 0, interval: 200, scale: 0})
sr.reveal('.new__data img', {delay: 1500, distance: 0, interval: 200, scale: 0})
sr.reveal('.new__text-1', {delay: 2100})
sr.reveal('.new__text-2', {delay: 2400})
