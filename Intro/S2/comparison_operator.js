// *********************** Part1
console.log(2 > 1);
console.log(3 < 5);
console.log(15 >= 15);
console.log(15 <= 14);

console.log(1 == 1)
console.log(1 == '1') // again true, because the equallity does not consider the type
console.log(false == true)
console.log(0 == "") // true, but different type
console.log(undefined == null) //true, but again different type
console.log(true == 1)
console.log(false == 0)


// === strict equality
console.log(1 === 1)
console.log(1 === '1') // false
console.log(false === true)
console.log(0 === "") // false
console.log(undefined === null) // false
console.log(true === 1)
console.log(false === 0)

// ************************** Part2 
// (ctr + D)
console.log(1 != 1) // F
console.log(1 != '1') // F
console.log(false != true) // T
console.log(0 != "") // F
console.log(undefined != null) // F
console.log(true != 1) // F
console.log(false != 0) // F

// !== strict not equality
console.log(1 != 1) // F
console.log(1 != '1') // T
console.log(false != true) // T
console.log(0 != "") // T
console.log(undefined != null) // T
console.log(true != 1) // F
console.log(false != 0) // F