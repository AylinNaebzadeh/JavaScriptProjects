let list = document.querySelector('.list');
let imgs = Array.from(list.children);
const nextBtn = document.querySelector(".btn-right");
const preBtn = document.querySelector(".btn-left");


// getting images width
const imgWidth = imgs[0].getBoundingClientRect().width;

// Arrenging images next to each other

function setImgPosition(img, index) {
    img.style.left = imgWidth * index + "px";
}

// when ever we call this foreach it grabs the width of img with 0 index
imgs.forEach(setImgPosition);

// moveToimg function
const moveToimg = function(list, currentImg, targetImg) {
    list.style.transform = "translateX(-" + targetImg.style.left + ")";
    currentImg.classList.remove('current-img');
    targetImg.classList.add('current-img');
}

// Hide/Show arrows
const hideShowArrows = function(imgs, prevBtn, nextBtn, targetIdx) {
    if (targetIdx === 0)
    {
        prevBtn.classList.add("hidden");
        nextBtn.classList.remove("hidden");
    }
    else if (targetIdx === imgs.length - 1)
    {
        prevBtn.classList.remove("hidden");
        nextBtn.classList.add("hidden");
    }
    else 
    {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
    }
}

/* when we click on the right button, move images to the left*/
nextBtn.addEventListener('click', function() {
    const currentImg = list.querySelector('.current-img');
    const nextImg = currentImg.nextElementSibling;
    const nextIndex = imgs.findIndex(img => img === nextImg);

    moveToimg(list, currentImg, nextImg);
    hideShowArrows(imgs,preBtn, nextBtn, nextIndex);
});


/* when we click on the left button, move images to the right */ 

preBtn.addEventListener('click', function() {
    const currentImg = list.querySelector('.current-img');
    const preImg = currentImg.previousElementSibling;
    const preIndex = imgs.findIndex(img => img === preImg);

    moveToimg(list, currentImg, preImg);
    hideShowArrows(imgs,preBtn, nextBtn, preIndex);
});

