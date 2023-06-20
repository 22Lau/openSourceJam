/*----- TIMELINE--------*/

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
    
    /*------CONTACT FORM-------*/
    function submitForm() {
        // Prevenir comportamiento predeterminado del envío del formulario
        event.preventDefault();
    
        // Obtener valores de los campos del formulario
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
    
        // Aquí realizarías la lógica para enviar los datos del formulario a tu servidor
    
        // Mostrar mensaje de éxito
        const successMessage = document.getElementById("success-message");
        successMessage.style.display = "block";
        successMessage.innerHTML = "¡Tu mensaje ha sido enviado exitosamente!";
    
        // Restablecer los valores de los campos del formulario
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    
        // Ocultar el mensaje emergente después de 3 segundos
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
