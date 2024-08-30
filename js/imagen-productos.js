function changeImage(src) {
    document.querySelector(".main-image").src = src;
    let thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
    event.target.classList.add('active');
}