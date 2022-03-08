let myVar = -12;
if (!myVar) {
    // console.log('wrong')
}
else {
    // console.log('correct')
}

//turner operator
const money = 100;
let food;
// if (money > 10) {
//     food = "biriyani"
// }
// else {
//     food = "singara"
// }
(money > 100) ? food = "biriyani" : food = "singara";
// console.log(food)

// string and number shortcut conversion
const num1 = 10;
const num1Str = num1 + "";
console.log(num1Str)
console.log(+num1Str)

// turner operator use in function call
let isActive = true;
const showUser = () => console.log('display User')
const hideUser = () => console.log('hide User')
// isActive ? showUser() : hideUser();
isActive && showUser();
isActive || hideUser();


// toogle
isActive = !isActive;
