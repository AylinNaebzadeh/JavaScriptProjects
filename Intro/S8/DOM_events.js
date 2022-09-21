// event is everything that user does
// Part(1)

// **** click event
// const changeBT = document.querySelector(".change-bg")
// console.log(changeBT)
// changeBT.addEventListener('click', function(){
//     document.body.style.backgroundColor = "#8fc0a9";
//     console.log("The change Bg button has been clicked!");
// });

// const resetBT = document.querySelector('.reset-bg');
// resetBT.addEventListener('click', function(){
//     document.body.style.backgroundColor = "#fff";
//     console.log("The reset Bg button has been clicked!");
// })

// *** double click event
// changeBT.addEventListener('dblclick', function(){
//     document.body.style.backgroundColor = "#8fc0a9";
//     console.log("The change bg button has been double clicked");
// });

// resetBT.addEventListener('dblclick', function(){
//     document.body.style.backgroundColor = "#fff";
//     console.log("The reset bg button has been double clicked");
// });


// Part(2)

// *** mouse over/out event

// changeBT.addEventListener('mouseover', function(){
//     document.body.style.backgroundColor = "#8fc0a9";
// })

// resetBT.addEventListener('mouseout', function(){
//     document.body.style.backgroundColor = "#fff";
// })

//  *** scroll event
// window => global object

// window.addEventListener('scroll', function(){
//     this.document.body.style.lineHeight = '2.1';
//     this.document.body.style.backgroundColor = 'blue';

// })

// Part(3)

// *** key events
// (1) key down => when the key is clicked
const textInput = document.querySelector('input[type="text"]');
// console.log(textInput);
// textInput.addEventListener('keydown', function(){
//     console.log('key down');
// });

// (2) key up => when the key is released
// textInput.addEventListener('keyup', function(){
//     console.log('keyup');
// });

// (3) keypress
// textInput.addEventListener('keypress', function(){
//     console.log('keypress');
// });

//  *** event object
textInput.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    console.log(e.clientX);
});
