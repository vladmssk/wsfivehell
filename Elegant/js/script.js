window.addEventListener('DOMContentLoaded' , () => {
    let menuIcon = document.querySelector('.menu__icon'),
    nav = document.querySelector('.nav');


    menuIcon.addEventListener('click' , function(){
        menuIcon.classList.toggle('_active');
        nav.classList.toggle('_active');
    });
})