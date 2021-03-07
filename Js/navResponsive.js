const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navBtn");
    const navBtn = document.querySelectorAll('.navBtn li');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('navBtnActive');

        navBtn.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navBtnFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');

    });

}

navSlide();