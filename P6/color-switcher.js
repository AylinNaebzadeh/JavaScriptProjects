const body = document.body;
const switchBtn = document.querySelector('.switch');
const switchPara = document.querySelector('.color');

switchBtn.addEventListener('click', function() {
    let r = getRandomNumber();  // red
    let g = getRandomNumber();  // green
    let b = getRandomNumber();  // blue

    const colorStr = `rgb(${r}, ${g}, ${b})`;

    body.style.backgroundColor = colorStr;
    switchPara.innerText = colorStr;
});

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}