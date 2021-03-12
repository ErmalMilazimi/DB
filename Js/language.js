var language = {
    eng : {
        home:"HOME",
        contact:"CONTACT",
        gallery:"GALLERY",
        banner:"-  Your weekend should not be wasted on cleaning, we will do it.",
        ourServices:"Our Services",
        services:"Services Eng",
        footerHeader: "Contact Us",
        slider:"See More"
    },
    ger : {
        home:"ZUHAUSE",
        contact:"KONTAKT",
        gallery:"GALERIE",
        banner:"-  Ihr Wochenende sollte nicht mit Putzen verschwendet werden, wir werden es tun.",
        ourServices:"Unsere Leistungen",
        services:"Bedienung Ger",
        footerHeader: "Kontaktiere Uns",
        slider:"Mehr sehen"
    }
};

var navButtons = document.querySelectorAll('.navBtn li a');
var bannerTxt = document.querySelector(".bannerTxt");
var ourServices = document.querySelector(".ourServices")
var services = document.querySelectorAll(".title");
var footerHeader = document.querySelector(".footerHeader");
var sliderLink = document.querySelector(".sliderLink p");
var contactPage = document.querySelector(".contactPage");

// var url = new URL(document.URL);

function changeGer(){
    navButtons[0].childNodes[0].textContent = language.ger.home;
    navButtons[1].childNodes[0].textContent = language.ger.gallery;
    navButtons[2].childNodes[0].textContent = language.ger.contact;
    if(bannerTxt != null){
        bannerTxt.childNodes[0].textContent = language.ger.banner;
    }
    if(sliderLink != null){
        sliderLink.childNodes[0].textContent = language.ger.slider;
    }
    if(services != null){
        for(i = 0; i < services.length; i++){
            services[i].childNodes[0].textContent = language.ger.services;
        }
    }
    if(ourServices != null){
        ourServices.childNodes[0].textContent = language.ger.ourServices;
    }
    if(footerHeader != null){
        footerHeader.childNodes[0].textContent = language.ger.footerHeader;
    }
    if(contactPage != null){
        contactPage.childNodes[0].textContent = language.ger.contact;
    }
    // url.hash = '#ger';
    // console.log(url.hash);
}

function changeEng(){
    navButtons[0].childNodes[0].textContent = language.eng.home;
    navButtons[1].childNodes[0].textContent = language.eng.gallery;
    navButtons[2].childNodes[0].textContent = language.eng.contact;
    if(bannerTxt != null){
        bannerTxt.childNodes[0].textContent = language.eng.banner;
    }
    if(sliderLink != null){
        sliderLink.childNodes[0].textContent = language.eng.slider;
    }
    if(ourServices != null){
        ourServices.childNodes[0].textContent = language.eng.ourServices;
    }
    if(contactPage != null){
        contactPage.childNodes[0].textContent = language.eng.contact;
    }
    if(services != null){
        for(i = 0; i < services.length; i++){
            services[i].childNodes[0].textContent = language.eng.services;
        }
    }
    if(footerHeader != null){
        footerHeader.childNodes[0].textContent = language.eng.footerHeader;
    }
    url.hash = '#eng';
}

// function checkLanguage() {
//     if(url.hash == ger){
//         changeGer();
//     }
//     else if(url.hash == eng){
//         changeEng();
//     }
//     console.log(url.hash);
// }