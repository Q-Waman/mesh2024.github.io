document.addEventListener('DOMContentLoaded', function () {
    // Actualiza el selector para coincidir con la nueva estructura de la barra de navegación
    var navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Obtener el id del elemento de destino.
            var targetId = link.getAttribute('data-target'); // Usar getAttribute para asegurar la compatibilidad
            var targetSection = document.getElementById(targetId);

            // Ocultar todas las secciones.
            document.querySelectorAll('main > section').forEach(function (section) {
                section.style.display = 'none';
            });

            // Si la sección existe, muéstrala.
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
});




let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    if (n >= slides.length) {
        slideIndex = 0
    }    
    if (n < 0) {
        slideIndex = slides.length - 1
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
}

