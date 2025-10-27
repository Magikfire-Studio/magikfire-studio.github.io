const images = document.querySelectorAll('.grid-image');
const lightboxs = document.querySelectorAll('.lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const bodyElement = document.body;

images.forEach(image => {
    image.addEventListener('click', function() {
        const lightboxId = this.getAttribute('data-modal');

        bodyElement.style.overflow = 'hidden';
        document.getElementById(lightboxId).style.display = 'flex';
    });
});

lightboxs.forEach(x => {
    x.addEventListener('click', function(event) {

        if (event.target !== this && event.target.parentNode !== this.querySelector('.lightbox-content')) {
            const lightboxs = this.closest('.lightbox');
            this.querySelector('.lightbox-content').scrollTop = 0;
            lightboxs.style.display = 'none';
            bodyElement.style.overflow = 'auto';
        }

    });
});

// console.log("hello world");