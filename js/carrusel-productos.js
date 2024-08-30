let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    // Oculta todos los slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Asegura que el índice esté dentro del rango
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    
    // Muestra el slide activo
    slides[slideIndex].classList.add('active');
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

// Mostrar el primer slide al cargar la página
showSlide(slideIndex);
