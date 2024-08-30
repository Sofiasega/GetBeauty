let currentIndex = 0;

    // Función para cambiar la imagen principal cuando se hace clic en una miniatura
    function changeImage(thumbnail) {
        var mainImage = document.getElementById("mainImage");
        
        if (mainImage && thumbnail) {
            mainImage.src = thumbnail.src;

            var thumbnails = document.querySelectorAll('.thumbnail');
            thumbnails.forEach(img => img.classList.remove('active'));
            thumbnail.classList.add('active');
            
            currentIndex = Array.from(thumbnails).indexOf(thumbnail);
        }
    }

    // Función para cambiar la imagen principal usando las flechas
    function changeImageByArrow(direction) {
        const thumbnails = document.querySelectorAll('.thumbnail');
        
        if (thumbnails.length > 0) {
            currentIndex = (currentIndex + direction + thumbnails.length) % thumbnails.length;
            document.getElementById('mainImage').src = thumbnails[currentIndex].src;
            
            thumbnails.forEach(img => img.classList.remove('active'));
            thumbnails[currentIndex].classList.add('active');
        }
    }

    document.querySelectorAll('.color-option').forEach(option => {
        const color = option.getAttribute('data-color');
        if (color) {
            option.style.backgroundColor = color;
        }

        option.addEventListener('click', function() {
            document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');

            const colorName = this.getAttribute('data-name');
            const colorNameElement = document.getElementById('color-name');
            if (colorNameElement) {
                colorNameElement.textContent = colorName;
            }

            // Cambiar la imagen principal según el color seleccionado
            const imageSrc = this.getAttribute('data-image');
            if (imageSrc) {
                document.getElementById('mainImage').src = imageSrc;
            }
        });
    });