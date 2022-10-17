let blockElement = document.querySelector('#block');
let verticalPosition = document.querySelector('#position-y');
let horizentalPosition = document.querySelector('#position-x');
let blockSize = document.querySelector('#size');
let shapeSelector = document.querySelector('#shape-select');
let okBtn = document.querySelector('#ok-btn');
let rgbaR = document.querySelector('#rgba-r');
let rgbaG = document.querySelector('#rgba-g');
let rgbaB = document.querySelector('#rgba-b');
let rgbaA = document.querySelector('#rgba-a');
let rgbaContainer = document.querySelector('.rgba-container');
let rgbaInputs = rgbaContainer.querySelectorAll('input');

// Vertical position changer
verticalPosition.addEventListener('change', function() {
    blockElement.style.top = verticalPosition.value + "px";
});

// Horizental position changer
horizentalPosition.addEventListener('change', function() {
    blockElement.style.left = horizentalPosition.value + "px";
});

// size changer
blockSize.addEventListener('change', function() {
    blockElement.style.transform = 'scale(' + blockSize.value + ')';
});

// shape changer
okBtn.addEventListener('click', function() {
    let shapeOption = shapeSelector.value;
    if (shapeOption == '1')
    {
        blockElement.style.borderRadius = '0';
    }
    else if (shapeOption == '2')
    {
        blockElement.style.borderRadius = '50%';
    }
});

// color changer
for (let i = 0; i < rgbaInputs.length; i++)
{
    rgbaInputs[i].addEventListener('change', function() {
        blockElement.style.backgroundColor = 'rgba('+ rgbaR.value 
                                                    + ',' + rgbaG.value 
                                                    + ',' + rgbaB.value
                                                    + ',' + rgbaA.value
                                                    + ')';
    });
}; 