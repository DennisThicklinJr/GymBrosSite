//DOM = documuent object model
//add later for mobile menu
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu'); 
const navLogo = document.querySelector('.navbar-logo'); 
const body = document.querySelector('body'); 

//add display mobile menu function

//add event listener for mobile menu

//initialize the plugin
gsap.registerPlugin(ScrollTrigger);

//select an html element to add an animation to it
gsap.from(
    ".animate-hero", {
        duration: 0.6,
        opacity: 0,
        y: -150,
        stagger: 0.3
    }
);

gsap.from('.animate-services', {
    scrollTrigger: '.animate-services',
    duration: 0.5,
    opacity: 0,
    x: -150,
    stagger: 0.12
})

gsap.from('.animate-membership', {
    scrollTrigger: '.animate-membership', 
    duration: 1,
    opacity: 0,
    y: -150, 
    stagger: 0.3
})

gsap.from('.animate-card', {
    scrollTrigger: '.animate-card', 
    duration: 1,
    opacity: 0,
    y: -150, 
    stagger: 0.1,
    delay: 0.2
})

gsap.from('.animate-team', {
    scrollTrigger: '.animate-team', 
    duration: 1,
    opacity: 0,
    y: -150, 
    stagger: 0.1,
    delay: 0.2
})

gsap.from('.animate-email', {
    scrollTrigger: '.animate-email', 
    duration: .8,
    opacity: 0,
    y: -150, 
    stagger: 0.25,
    delay: 0.4
})