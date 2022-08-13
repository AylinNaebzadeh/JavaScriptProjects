/*data types
A) primitive
B) reference
*/ 

/*A
1- number
2- string
3- bool
4- undefined
5- null
6- symbol --> no two symbols are equal in js
    const sym = Symbol()
    Symbol() != Symbol()
7- bigInt --> integers with arbitrary length
const bigint = 1234567890123456789019235n
const bigintTwo = BigInt('1234567890123456789019235n')
8- NaN --> not a number
*/

/*B
1- Arrays
2- Objects
3- Functions
*/

// array
let numbers = [1, 2, 3];
// console.log(numbers);

// object
const person = {
    name: "Aylin", // key: value pair => properties
    age: 35,
};
// console.log(person)

//function
function add()
{
    return (12 + 1) * 10;
}

// console.log(add());
