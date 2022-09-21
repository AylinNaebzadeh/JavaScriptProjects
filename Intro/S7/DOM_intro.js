// DOM => document object model => link the JS object to the HTML Doc

// ********** Selecting methods => getting HTML elements by their class

const heading = document.getElementsByClassName('title');
console.log(heading);

// ********** Selecting methods => getting HTML elements by their id

let image = document.getElementById('family-img');
console.log(image);

// ********** Selecting methods => querySelectorAll => it selects all elements that share that selector

let familyMembers = document.querySelectorAll('.item');

console.log(familyMembers)

// ********** Selecting methods => querySelector => it selects only one element that has the selector

let familyImg = document.querySelector('#family-img');
console.log(familyImg);


