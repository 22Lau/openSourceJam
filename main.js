const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

/* ---WELCOME--- */

function animateEntry() {
    var welcome = document.querySelector('.welcome');
    var h4 = document.querySelector('h4');

    welcome.style.opacity = '1';
    welcome.style.transform = 'translateY(0)';

    h4.style.opacity = '1';
    h4.style.transform = 'translateY(0)';
}

// Ejecutar la animación cuando la página haya cargado completamente
window.addEventListener('load', function() {
    animateEntry();
});



/* ----TIMELINE----- */

(function () {
    "use strict";

    // define variables
    var items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
            }
        }
        }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
    })();

   /*  --CONTACT FORM--- */

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });
});

function submitForm() {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
    successMessage.innerHTML = "¡Tu mensaje ha sido enviado exitosamente!";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    
    setTimeout(function() {
        successMessage.style.display = "none";
    }, 5000);
}


window.addEventListener('load', () => {
    anime({
        targets: '.container',
        translateX: ['100%', '0'],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
        });
    });

/* ----STARS---- */
    const starCount = 150; 
    const container = document.getElementById('stars');


    for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    container.appendChild(star);
    }

    
    function animateStars() {
    const stars = document.getElementsByClassName('star');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    for (let i = 0; i < starCount; i++) {
        const star = stars[i];
        const x = Math.random() * containerWidth;
        const y = Math.random() * containerHeight;
        const duration = Math.random() * 25 + 15;
        const size = Math.random() * 2 + 1;

        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.animationDuration = duration + 's';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
    }
    }

    window.addEventListener('resize', animateStars);

    animateStars();



