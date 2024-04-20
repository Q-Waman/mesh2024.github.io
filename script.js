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



$('.carousel').carousel();
