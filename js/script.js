document.addEventListener('DOMContentLoaded', function () {
    // Asegurarse de que se seleccionan los enlaces de navegación correctos
    var navLinks = document.querySelectorAll('nav ul li a');
    console.log('Enlaces encontrados:', navLinks.length); // Debería mostrar el número de enlaces

    navLinks.forEach(function (link, index) {
        console.log('Enlace', index, link); // Debería mostrar cada enlace

        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Diagnosticar el targetId
            var targetId = link.getAttribute('data-target');
            console.log('ID del elemento de destino:', targetId); // Debería mostrar el ID de destino

            var targetSection = document.getElementById(targetId);
            console.log('Sección de destino encontrada:', targetSection); // Debería mostrar el elemento de la sección o null

            // Ocultar todas las secciones
            document.querySelectorAll('main > section').forEach(function (section) {
                section.style.display = 'none';
            });

            // Mostrar la sección de destino
            if (targetSection) {
                targetSection.style.display = 'block';
            } else {
                // Si no se encuentra la sección, mostrar un error en la consola
                console.error('No se encontró la sección con ID:', targetId);
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

