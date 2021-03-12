const sectionOne = document.querySelector(".header");
const logoImg = document.querySelector(".logoImg");
const navBtn = document.querySelector(".navBtn");
const nav = document.querySelector(".nav");
const langBtn = document.querySelector(".languages");

const sectionOneOptions = {
    rootMargin: "-150px 0px 0px 0px"
};

const sectionOneObesrver = new IntersectionObserver(function(entries,sectionOneOptions){
    entries.forEach(entry => {
       if(!entry.isIntersecting){
            logoImg.classList.remove("hidden");
            navBtn.classList.remove("marginNav");
            nav.classList.add("navBg");
            if(sectionOne.clientWidth > 1024){
                langBtn.classList.add("langCenter");
            }
       } else {
        logoImg.classList.add("hidden");
        navBtn.classList.add("marginNav");
        nav.classList.remove("navBg");
        langBtn.classList.remove("langCenter");
       }
    });
}, sectionOneOptions);

sectionOneObesrver.observe(sectionOne);