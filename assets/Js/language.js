var language = {
    eng : {
        home:"HOME",
        contact:"CONTACT",
        gallery:"GALLERY",
        banner:"-  Your weekend should not be wasted on cleaning, we will do it.",
        ourServices:"Our Services",
        footerHeader: "Contact Us",
        galleryHeader:"Work done by us",
        slider:"See More",
        s1Title:"House cleaning",
        s2Title:"Office Cleaning",
        s3Title:"Mattress Cleaning",
        s4Title:"Garden Cleaning",
        s5Title:"Environment Friendly",
        s6Title:"Clean Environment",
        s1:"We are fully bonded and insured, meaning you can have peace of mind when we enter your home.",
        s2:"A clean work environment put people at ease and tidiness is key to efficiency. With our certified team and all tools & supplies, we provide tidy work.",
        s3:"It’s important to have a clean mattress to keep you relaxed and comfortable. We provide eco-friendly and safe cleaning of your mattress using the most modern and advanced technology.",
        s4:"An important part of keeping your garden looking nice and tidy is mowing the lawn regularly. We can safely do that for you every week.",
        s5:"We as a company are committed to using cleaning products that are environmentally responsible, sustainable, and safe for the Earth.",
        s6:"Our deep cleaning includes all the services of a standard clean with additional steaming and sanitizing."
    },
    ger : {
        home:"ZUHAUSE",
        contact:"KONTAKT",
        gallery:"GALERIE",
        banner:"-  Ihr Wochenende sollte nicht mit Putzen verschwendet werden, wir werden es tun.",
        ourServices:"Unsere Leistungen",
        footerHeader: "Kontaktiere Uns",
        galleryHeader:"Von Uns Geleistete Arbeit",
        slider:"Mehr sehen",
        s1Title:"Hausreinigung",
        s2Title:"Büro Putzen",
        s3Title:"Matratzenreinigung",
        s4Title:"Gartenreinigung",
        s5Title:"Umweltfreundlich",
        s6Title:"Saubere Umwelt",
        s1:"Wir sind voll haftbar und versichert, was bedeutet, dass Sie sicher sein können, wenn wir Ihr Haus betreten.",
        s3:"Es ist wichtig, eine saubere Matratze zu haben, damit Sie entspannt und bequem bleiben können. Wir bieten eine umweltfreundliche und sichere Reinigung Ihrer Matratze mit modernster und fortschrittlichster Technologie.",
        s2:"Ein sauberes Arbeitsumfeld beruhigt die Menschen und Ordnung ist der Schlüssel zur Effizienz. Mit unserem zertifizierten Team und allen Werkzeugen und Materialien sorgen wir für ordentliche Arbeit.",
        s4:"Ein wichtiger Teil dafür, dass Ihr Garten schön und ordentlich aussieht, ist das regelmäßige Mähen des Rasens. Das können wir sicher jede Woche für Sie tun.",
        s5:"Wir als Unternehmen verpflichten uns, Reinigungsprodukte zu verwenden, die umweltbewusst, nachhaltig und sicher für die Erde sind.",
        s6:"Unsere Tiefenreinigung umfasst alle Leistungen einer Standardreinigung mit zusätzlichem Dämpfen und Desinfizieren."
    },
    fre : {
        home:"DOMICILE",
        contact:"CONTACT",
        gallery:"GALERIE",
        banner:"-  Votre week-end ne doit pas être gaspillé en ménage, nous le ferons.",
        ourServices:"Nos Services",
        footerHeader: "Nous contacter",
        galleryHeader:"Travaux réalisés par nos soins",
        slider:"En savoir plus",
        s1Title:"Nettoyage de la maison",
        s2Title:"Nettoyage de bureaux",
        s3Title:"Nettoyage de matelas",
        s4Title:"Nettoyage de jardin",
        s5Title:"Écologique",
        s6Title:"Environnement propre",
        s1:"Nous sommes entièrement cautionnés et assurés, ce qui signifie que vous pouvez avoir l'esprit tranquille lorsque nous entrons dans votre maison.",
        s2:"Un environnement de travail propre met les gens à l'aise et la propreté est la clé de l'efficacité. Avec notre équipe certifiée et tous les outils et fournitures, nous fournissons un travail soigné.",
        s3:"Il est important d'avoir un matelas propre pour que vous soyez détendu et confortable. Nous assurons un nettoyage écologique et sûr de votre matelas en utilisant la technologie la plus moderne et la plus avancée.",
        s4:"Une partie importante pour garder votre jardin beau et bien rangé est de tondre la pelouse régulièrement. Nous pouvons le faire pour vous en toute sécurité chaque semaine.",
        s5:"En tant qu'entreprise, nous nous engageons à utiliser des produits de nettoyage respectueux de l'environnement, durables et sans danger pour la Terre.",
        s6:"Notre nettoyage en profondeur comprend tous les services d'un nettoyage standard avec vapeur supplémentaire et désinfection."
    }
};

var navButtons = document.querySelectorAll('.navBtn li a');
var bannerTxt = document.querySelector(".bannerTxt");
var ourServices = document.querySelector(".ourServices");
var services = document.querySelectorAll(".title");
var servicesTxt = document.querySelectorAll(".servicesTxt");
var footerHeader = document.querySelector(".footerHeader");
var sliderLink = document.querySelector(".sliderLink p");
var contactPage = document.querySelector(".contactPage");
var galleryHeader = document.querySelector(".galleryTxt");

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
    if(ourServices != null){
        ourServices.childNodes[0].textContent = language.ger.ourServices;
    }
    if(footerHeader != null){
        footerHeader.childNodes[0].textContent = language.ger.footerHeader;
    }
    if(contactPage != null){
        contactPage.childNodes[0].textContent = language.ger.contact;
    }
    if(galleryHeader != null){
        galleryHeader.childNodes[0].textContent = language.ger.galleryHeader;
    }
    if(services != null){
        services[0].childNodes[0].textContent = language.ger.s1Title;
        services[1].childNodes[0].textContent = language.ger.s2Title;
        services[2].childNodes[0].textContent = language.ger.s3Title;
        services[3].childNodes[0].textContent = language.ger.s4Title;
        services[4].childNodes[0].textContent = language.ger.s5Title;
        services[5].childNodes[0].textContent = language.ger.s6Title;
    }
    if(servicesTxt != null){
        servicesTxt[0].childNodes[0].textContent = language.ger.s1;
        servicesTxt[1].childNodes[0].textContent = language.ger.s2;
        servicesTxt[2].childNodes[0].textContent = language.ger.s3;
        servicesTxt[3].childNodes[0].textContent = language.ger.s4;
        servicesTxt[4].childNodes[0].textContent = language.ger.s5;
        servicesTxt[5].childNodes[0].textContent = language.ger.s6;
    }
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
    if(footerHeader != null){
        footerHeader.childNodes[0].textContent = language.eng.footerHeader;
    }
    if(galleryHeader != null){
        galleryHeader.childNodes[0].textContent = language.eng.galleryHeader;
    }
    if(services != null){
        services[0].childNodes[0].textContent = language.eng.s1Title;
        services[1].childNodes[0].textContent = language.eng.s2Title;
        services[2].childNodes[0].textContent = language.eng.s3Title;
        services[3].childNodes[0].textContent = language.eng.s4Title;
        services[4].childNodes[0].textContent = language.eng.s5Title;
        services[5].childNodes[0].textContent = language.eng.s6Title;
    }
    if(servicesTxt != null){
        servicesTxt[0].childNodes[0].textContent = language.eng.s1;
        servicesTxt[1].childNodes[0].textContent = language.eng.s2;
        servicesTxt[2].childNodes[0].textContent = language.eng.s3;
        servicesTxt[3].childNodes[0].textContent = language.eng.s4;
        servicesTxt[4].childNodes[0].textContent = language.eng.s5;
        servicesTxt[5].childNodes[0].textContent = language.eng.s6;
    }
}

function changeFre(){
    navButtons[0].childNodes[0].textContent = language.fre.home;
    navButtons[1].childNodes[0].textContent = language.fre.gallery;
    navButtons[2].childNodes[0].textContent = language.fre.contact;
    if(bannerTxt != null){
        bannerTxt.childNodes[0].textContent = language.fre.banner;
    }
    if(sliderLink != null){
        sliderLink.childNodes[0].textContent = language.fre.slider;
    }
    if(ourServices != null){
        ourServices.childNodes[0].textContent = language.fre.ourServices;
    }
    if(contactPage != null){
        contactPage.childNodes[0].textContent = language.fre.contact;
    }
    if(footerHeader != null){
        footerHeader.childNodes[0].textContent = language.fre.footerHeader;
    }
    if(galleryHeader != null){
        galleryHeader.childNodes[0].textContent = language.fre.galleryHeader;
    }
    if(services != null){
        services[0].childNodes[0].textContent = language.fre.s1Title;
        services[1].childNodes[0].textContent = language.fre.s2Title;
        services[2].childNodes[0].textContent = language.fre.s3Title;
        services[3].childNodes[0].textContent = language.fre.s4Title;
        services[4].childNodes[0].textContent = language.fre.s5Title;
        services[5].childNodes[0].textContent = language.fre.s6Title;
    }
    if(servicesTxt != null){
        servicesTxt[0].childNodes[0].textContent = language.fre.s1;
        servicesTxt[1].childNodes[0].textContent = language.fre.s2;
        servicesTxt[2].childNodes[0].textContent = language.fre.s3;
        servicesTxt[3].childNodes[0].textContent = language.fre.s4;
        servicesTxt[4].childNodes[0].textContent = language.fre.s5;
        servicesTxt[5].childNodes[0].textContent = language.fre.s6;
    }
}