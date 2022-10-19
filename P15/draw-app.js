const canvas = document.getElementById('drawing-canvas');
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const strokeThickness = document.querySelector('#size');
const colorBtn = document.querySelector('#color');
const clearBtn = document.querySelector('#clear');

const ctx = canvas.getContext("2d"); 

let size = 10;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;

canvas.addEventListener('mousedown', function(e)  {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', function(e) {
    isPressed = false;
    x = undefined;
    y = undefined;
});

// drawing lines
function drawLines(x1, y1, x2, y2)
{
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

// drawing Circles
function drawCircle(x, y)
{
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

canvas.addEventListener('mousemove', function(e) {
    if (isPressed)
    {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLines(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

// increase btn
increaseBtn.addEventListener('click', function() {
    size += 1;

    if (size > 50)
    {
        size = 50;
    }
    update_size();
});

// decrease btn
decreaseBtn.addEventListener('click', function() {
    size -= 1;
    if (size < 1)
    {
        size = 1;
    }
    update_size();
});

// updating the stroke width dynamically
function update_size()
{
    strokeThickness.innerText = size;
}

// color switcher
colorBtn.addEventListener('change', function(e) {
    color = e.target.value;
});

// clear
colorBtn.addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

