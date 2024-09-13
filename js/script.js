/**SCROLL SUAVE MENU */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/* EXIBE O MENU MOBILE */
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const closeMenuButton = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.menu-mobile');
const menuOverlay = document.querySelector('.menu-overlay');
const menuLinks = document.querySelectorAll('.menu-mobile ul li a');

function openMenu() {
    mobileMenu.classList.add('open');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileMenu.classList.remove('open');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

mobileMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        closeMenu();
        console.log('Navigating to:', link.getAttribute('href'));
    });
});


/* ANIMA OS BANNERS */
let list = document.querySelectorAll('.banners');
let next = document.getElementById('next');
let back = document.getElementById('prev');
let count = list.length;
let active = 0;

function goToNextBanner() {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');
    active = active >= count - 1 ? 0 : active + 1;
    list[active].classList.add('active');
}

function goToPreviousBanner() {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');
    active = active <= 0 ? count - 1 : active - 1;
    list[active].classList.add('active');
}

next.addEventListener('click', goToNextBanner);
back.addEventListener('click', goToPreviousBanner);
setInterval(goToNextBanner, 25000);


/**ANIMA OS BLOCOS DOS ACORDEONS */
function toggleAccordion(element) {
    const accordionItem = element.parentElement;
    const accordionContent = accordionItem.querySelector('.accordion-content');
    const isActive = accordionItem.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-content').style.maxHeight = null;
    });


    if (!isActive) {
        accordionItem.classList.add('active');
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
}


/*ANIMACOES SECTION INSTALACAO */
document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.section-installation');
    const banner = document.querySelector('.banner-installation');
    const h1 = section.querySelector('h1');
    const h2 = section.querySelector('h2');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target === section) {
                    h1.style.animation = 'none';
                    h2.style.animation = 'none';
                    h1.offsetHeight;
                    h2.offsetHeight;
                    h1.style.animation = null;
                    h2.style.animation = null;
                } else if (entry.target === banner) {
                    banner.style.animation = 'none';
                    banner.offsetHeight;
                    banner.style.animation = null;
                }
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(section);
    observer.observe(banner);
});


/*ANIMACOES SECTION MAINTENANCE */
document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.section-maintenance');
    const banner = document.querySelector('.banner-maintenance');
    const h1 = section.querySelector('h1');
    const h2 = section.querySelector('h2');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target === section) {
                    h1.style.animation = 'none';
                    h2.style.animation = 'none';
                    h1.offsetHeight;
                    h2.offsetHeight;
                    h1.style.animation = null;
                    h2.style.animation = null;
                } else if (entry.target === banner) {
                    banner.style.animation = 'none';
                    banner.offsetHeight;
                    banner.style.animation = null;
                }
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(section);
    observer.observe(banner);
});


/*ANIMACOES SECTION INFRASTRUCTURE */
document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.section-infrastructure');
    const banner = document.querySelector('.banner-infrastructure');
    const h1 = section.querySelector('h1');
    const h2 = section.querySelector('h2');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target === section) {
                    h1.style.animation = 'none';
                    h2.style.animation = 'none';
                    h1.offsetHeight;
                    h2.offsetHeight;
                    h1.style.animation = null;
                    h2.style.animation = null;
                } else if (entry.target === banner) {
                    banner.style.animation = 'none';
                    banner.offsetHeight;
                    banner.style.animation = null;
                }
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(section);
    observer.observe(banner);
});


/*BOTÃO FLUTUANTE DE WHATSAPP */
document.addEventListener("DOMContentLoaded", function () {
    var messageBox = document.querySelector(".message-box");

    setTimeout(function () {
        messageBox.classList.add("show");
    }, 500);

    setTimeout(function () {
        messageBox.classList.remove("show");
    }, 5000);

    var whatsappButton = document.querySelector(".whatsapp-float");
    whatsappButton.addEventListener("mouseover", function () {
        messageBox.classList.add("show");
    });

    whatsappButton.addEventListener("mouseout", function () {
        messageBox.classList.remove("show");
    });
});