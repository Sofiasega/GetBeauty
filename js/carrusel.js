document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0; // Índice inicial de la diapositiva
    const slides = document.querySelectorAll('.carousel-images img'); // Selecciona todas las imágenes
    const slideInterval = 3000; // Intervalo de 3 segundos
  
    function showSlide(index) {
      // Asegúrate de que el índice esté dentro del rango de imágenes
      slideIndex = (index + slides.length) % slides.length; // Calcula el índice circularmente
  
      // Oculta todas las imágenes
      slides.forEach(slide => {
        slide.classList.remove('active'); // Remueve la clase 'active'
      });
  
      // Muestra la imagen actual
      slides[slideIndex].classList.add('active'); // Agrega la clase 'active' a la imagen actual
    }
  
    function moveSlide(n) {
      showSlide(slideIndex + n); // Mueve la diapositiva según el índice actualizado
    }
  
    // Muestra la primera imagen
    showSlide(slideIndex);
  
    // Configura el intervalo para pasar automáticamente las diapositivas
    setInterval(() => {
      moveSlide(1); // Mueve a la siguiente diapositiva
    }, slideInterval);
  });
  