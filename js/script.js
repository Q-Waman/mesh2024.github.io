document.addEventListener('DOMContentLoaded', function () {
    console.log('El DOM está completamente cargado y parseado');
    
    // Selecciona todos los enlaces dentro del elemento nav
    var navLinks = document.querySelectorAll('nav a');
    console.log(navLinks); // Verificar si los enlaces se seleccionan correctamente
    
    navLinks.forEach(function (link) {
        console.log('Se añadió el evento a:', link.textContent);

        link.addEventListener('click', function (event) {
            console.log('Enlace clickeado:', link.textContent);
            event.preventDefault();

            // Obtener el ID del elemento de destino.
            var targetId = link.getAttribute('data-target');
            console.log('ID del elemento de destino:', targetId);

            var targetSection = document.getElementById(targetId);
            console.log('Sección de destino:', targetSection);

            // Ocultar todas las secciones.
            var sections = document.querySelectorAll('main > section');
            console.log('Secciones a ocultar:', sections);

            sections.forEach(function (section) {
                section.style.display = 'none';
            });

            // Mostrar la sección de destino.
            if (targetSection) {
                targetSection.style.display = 'block';
                console.log('Sección mostrada:', targetId);
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

