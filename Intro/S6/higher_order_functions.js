// functions that accept other functions as arguments => callback functions
// or accept other functions as returned values => factory functions

// ***************************************** Type (1)
// function repeat(x)
// {
//     x();
//     x();
// }

// function number()
// {
//     console.log(2 + 5);
// }

// repeat(number); // the number() function is actually a callback function


// **************************************** Type (2)

// function sum(x) // the return value is actually another function, lexical scope
// {
//     return function (y)
//     {
//         return x + y;
//     }; // annonymous function
// }

// let num1 = sum(5);
// console.log(num1);
// console.log(num1(3));

// ******************************************* Type (3)
// setTimeout(() => {
//     console.log(2 + 1);
// }, 2000); // 2 second


// DOM
// we have to select the selector
const btn = document.querySelector('button')
const para = document.querySelector('p')
btn.addEventListener('click', function()
{
    para.classList.add('active');
})



