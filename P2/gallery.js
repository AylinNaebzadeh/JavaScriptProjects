const fullImg = document.querySelector('.full-img');
const smallImg = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');

console.log(smallImg);

smallImg.forEach(function(img) {
    img.addEventListener('click', function() {
        modal.classList.add('open');
        fullImg.classList.add('open');
        // change the images dynamically
        const originalQuality = img.getAttribute('alt');
        fullImg.src = `img/full/${originalQuality}.jpg`;
    });
});

// after clicking anywhere outside the image the modal should be gone
modal.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        modal.classList.remove('open');
        fullImg.classList.remove('open');
    }
})