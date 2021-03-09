// var dataReload = document.querySelectorAll("[data-reload]");

var language = {
    eng : {
        home:"HOME",
        contact:"CONTACT",
        gallery:"GALLERY",
        banner:"-  Your weekend should not be wasted on cleaning, we will do it."
    },
    ger : {
        home:"HOMES",
        contact:"KONTAKT",
        gallery:"GALERIE",
        banner:"-  Ihr Wochenende sollte nicht mit Putzen verschwendet werden, wir werden es tun."
    }
};

var btn =  document.querySelectorAll('input[name="language"]');
var navb1 = document.getElementById("navButtons1");
var navb2 = document.getElementById("navButtons2");
var navb3 = document.getElementById("navButtons3");
var bannerTxt = document.getElementById("bannerTxt");
function changeGer(){
    navb1.childNodes[0].textContent = language.ger.home;
    navb2.childNodes[0].textContent = language.ger.gallery;
    navb3.childNodes[0].textContent = language.ger.contact;
    bannerTxt.childNodes[0].textContent = language.ger.banner;
}

function changeEng(){
    navb1.childNodes[0].textContent = language.eng.home;
    navb2.childNodes[0].textContent = language.eng.gallery;
    navb3.childNodes[0].textContent = language.eng.contact;
    bannerTxt.childNodes[0].textContent = language.eng.banner;
}