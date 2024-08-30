let slideIndex = 0;
const slideInterval = 3000; // Intervalo en milisegundos (5000 ms = 5 segundos)

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    
    // Asegúrate de que el índice esté dentro del rango de imágenes
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    // Oculta todas las imágenes
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Muestra la imagen actual
    slides[slideIndex].classList.add('active');
}

function moveSlide(n) {
    showSlide(slideIndex + n);
}

// Inicializa el carrusel mostrando la primera imagen
document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
    
    // Configura el intervalo para pasar automáticamente las diapositivas
    setInterval(() => {
        moveSlide(1); // Mueve a la siguiente diapositiva
    }, slideInterval);
});
