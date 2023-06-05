// Navbar

function navFunc(){
    document.querySelector('html').classList.toggle('open');
}

//===================== Timer ==================

const consult = setInterval(consultations, 10);
const exper = setInterval(experience, 10);
const dossiers = setInterval(dossiersGagnes, 10);
let counter1 = 1;
let counter2 = 1;
let counter3 = 1;

function consultations(){
    counter1++;
    document.getElementById('number1').innerHTML = counter1 + '+'
    // stop the count
    if(counter1 === 1200){
        clearInterval(consult)
    }          
}

function experience(){
    counter2++;
    document.getElementById('number2').innerHTML = counter2
    // stop the count
    if(counter2 === 20){
        clearInterval(exper)
    }          
}

function dossiersGagnes(){
    counter3++;
    document.getElementById('number3').innerHTML = counter3 + '+'
    // stop the count
    if(counter3 === 750){
        clearInterval(dossiers)
    }          
}

// card
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSilde: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }, 
    },
});
// testimony
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 1,
        },
        950: {
            slidesPerView: 1,
        }, 
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
