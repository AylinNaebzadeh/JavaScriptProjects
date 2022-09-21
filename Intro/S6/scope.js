/* variable declaration => let, const, var*/


// let
function myFunc()
{
    let name = "Aylin";
}
console.log(name); // => error

// const
function myFunc()
{
    const name = "Aylin";
}
console.log(name); // => error

function myFunc()
{
    var name = "Aylin";
}
console.log(name); // => error
/* there is no difference between these three function declarations beside that const can not be assigned */
/* but when the scope is not function scope the var declaration does not depends on the scope, and it's not a good thing to use it  */

// let
if (2 > 1 && 1 < 3)
{
    let result = true;
    console.log(result);
}
console.log(result); // error

// const
if (2 > 1 && 1 < 3)
{
    const result = true;
    console.log(result);
}
console.log(result); // error

// var
if (2 > 1 && 1 < 3)
{
    var result = true;
    console.log(result);
}
console.log(result); // error