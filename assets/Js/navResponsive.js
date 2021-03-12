const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navBtn");
    const navBtn = document.querySelectorAll('.navBtn li');
    const nav1 = document.querySelector(".nav");
    const logoImg = document.querySelector(".logoImg");

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('navBtnActive');
        
        if(!nav1.classList.contains("navBg")){
            nav1.classList.toggle("navBg");
            logoImg.classList.toggle("hidden");
        }

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