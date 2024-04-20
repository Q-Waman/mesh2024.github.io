document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('aside nav ul li a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = event.target.getAttribute('data-target');
            var sections = document.querySelectorAll('main section');
            
            // Oculta todas las secciones
            sections.forEach(function (section) {
                section.style.display = 'none';
            });

            // Muestra la sección seleccionada
            var targetSection = document.getElementById(targetId);
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

