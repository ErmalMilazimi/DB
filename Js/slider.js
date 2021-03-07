const slider = document.querySelector('.slider');
const sliderImg = document.querySelectorAll('.slides img');

const nextBtn = document.querySelector('.btnRight');
const prevBtn = document.querySelector('.btnLeft');

let counter = 1;
const size = sliderImg[0].clientWidth;

slider.style.transform = 'translateX(' + ( -size * counter)+'px';

nextBtn.addEventListener('click',()=>{
    slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
});