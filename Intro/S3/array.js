let numbers = [1, 2, 3, 4, 5, 81, 91, 2002];
console.log(numbers);

let colors = ["red", "green", "yellow"];
let mixed = ["ZZZ", 67, null, NaN, true];

// console.log(colors[0])
// console.log(colors[1])
// console.log(colors[4])

numbers[3] = 20;

// 0, 1, 2, 3, 4 
//-5, -4, -3, -2, -1

// ****************************************** Methods
/* shift => removes from the start */
numbers.shift();
console.log(numbers);

/* unshift => add to the start */
numbers.unshift(6);
console.log(numbers);

/* pop => remove from the end */
numbers.pop();
console.log(numbers);

/* push => add to the end */
numbers.push(45);
console.log(numbers);

/* slice(starting index, ending index), it does not include the ending index */

let tmp1 = numbers.slice(1, 4);
console.log(tmp1);
let tmp2 = numbers.slice(-1);
console.log(tmp2);
let tmp3 = numbers.slice(-2);
console.log(tmp3);

/* splice(starting index, number of items to be removed, the numbers that we want to add) */

// removing
let tmp4 = numbers.splice(1, 4);
console.log(tmp4);
console.log(numbers);

// removing and replacing
let tmp5 = numbers.splice(1, 2, 1381, 1382);
console.log(tmp5);
console.log(numbers);

// adding
let tmp6 = numbers.splice(1, 0, 1381, 1382); // the second parameter is set to zero
console.log(tmp6);
console.log(numbers);

/* includes */

const animals1 = ["lion", "parrot", "turtle"];
console.log(animals1.includes("lion"));

/* concat => combine or merges two or more arrays */
const animals2 = ["zebra", "horse"];
animals1.concat(animals2);

/* reverse method */
console.log(animals1.reverse())

/* join => converts any array to string */
console.log(animals1.join()); // the entire array
console.log(animals1.join(" ")); // remove the (,) and replace it with space


// **************************** Nesting => array of arrays
const favs = [
    ['GodFather', 'Troy', 'BraveHeart'],
    ['Sleep', 'Eat', 'Shower'],
    ['Queen', 'Madonna', 'Dead or Alive']
];

console.log(favs);
console.log(favs[1]);
console.log(favs[1][2]);





