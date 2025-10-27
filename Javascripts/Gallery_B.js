const gallery = document.querySelector('.gallery_B');
const modal = document.querySelector('.modal_B');
const modalImg = document.querySelector('#modal-img_B');
const bodyElement = document.body;

// const modal_dw = document.querySelector('#dw');

gallery.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        modal.style.display = 'flex';
        bodyElement.style.overflow = 'hidden';
        modalImg.src = e.target.src;
    }
});

modal.addEventListener('click', function() {
    modal.style.display = 'none';
    bodyElement.style.overflow = 'auto';
});