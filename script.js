// variable Number
var age = 20;
console.log(age)
console.log(typeof age)

// Number string
var name = "Mahin Howlader"
console.log(name)
console.log(typeof name)


// add 
console.log(20 + 20)

// parseInt
let birthday = "2004";
console.log(parseInt(birthday))



// parseFloat
let float = "2004343.43434889000";
console.log(parseFloat(parseFloat(float).toFixed(2)))



// Infinity -Infinity
const infi = 50/0;
console.log(infi)

const subtraction = -50 / 0;
console.log(subtraction) 


// addition subtraction divition multiplication remainder
var add1 = 45;
var add2 = 23;
console.log(add1 + add2)


var apple = 34;
    apple = apple + 54;
    console.log(apple)



// substraction
var sub1 = 100;
var sub2 = 50;
console.log(sub1 - sub2)

var mango = 122;
    mango = mango - 22;
    console.log(mango)

// divition
var div1 = 50;
var div2 = 5;
console.log(div1 / div2)


var orange = 350;
    orange = orange / 50;
console.log(orange)


// multiplication
var mul = 5;
var mul2 = 2;
console.log(mul * mul2)

var pisTometo = 10;
    pisTometo *= 5;
    console.log(pisTometo)

// remainder
var remin = 50;
var remainder2 = 9;
console.log(remin % remainder2)



// shortcurt opration 
let addtion1 = 23;
    addtion1 += 50;
    console.log(addtion1)



// number
let Numbers = Number(" 23434")
console.log(Numbers)
let Numbers2 = Number(" mahin")
console.log(Numbers2)
let Numbers3 = Number(" 50,32")
console.log(Numbers3)



// isNaN
let isNaN1 = isNaN("mahin")
console.log(isNaN1)
let isNaN2 = isNaN("333")
console.log(isNaN2)
let isNaN3 = isNaN(343)
console.log(isNaN3)





// task 1
var oneKgApple = 350;
var oneKgOrange = 350;
var shopeKeperPaid = 1000;
var result = (shopeKeperPaid - (oneKgApple+ oneKgOrange));

console.log(result);


// // avrage গড় নম্বর
// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04

const Mathematics = 75.25;
const Biology = 65;
const Chemistry = 80;
const Physics = 35.45;
const Bangla = 99.50;

const totalSubject = 5;
const resultAvg = (Mathematics+ Biology+ Chemistry+ Physics+ Bangla) / totalSubject
console.log(parseFloat(resultAvg.toFixed(2)))






// task 3

// const total  = 119;
// const give = 5;
// const resultRemainder = total % give;
// console.log(resultRemainder)








// Task-4
// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// Explain your answers
var a = isNaN(11);
console.log(a)
