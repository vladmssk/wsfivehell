window.addEventListener('DOMContentLoaded' , () => {
    let menuIcon = document.querySelector('.menu__icon'),
    nav = document.querySelector('.nav');


    menuIcon.addEventListener('click' , function(){
        menuIcon.classList.toggle('_active');
        nav.classList.toggle('_active');
    });

    document.querySelector('.header-link-arrow a[href^="#"').addEventListener('click' , function () {


            let href = this.getAttribute('href').substring(1);
            const scrollTarget = document.getElementById(href);
            const topOffset = document.querySelector('.nav').offsetHeight;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;


            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
})