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