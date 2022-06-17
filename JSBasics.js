// "use strict";
document.write("<br />");
document.write("<br />");
document.write("Hello All");

alert("welcome");

// Console API
console.log("Hello World");
console.warn("This is warning");
console.error("This is error");

// Variables
var firstNumber = 20;
var secondNumber = 40;
console.log(firstNumber + secondNumber);

const firstNum = 5;
const secondNum = 10;
let total = firstNum + secondNum;
console.log(total);

//DataTypes - Premitive & Reference type
var num = 10; //number

var myString = "Hello Dhyana!!"; //string

var marks = {
  //object (reference type)
  dhyana: 99,
  John: 98,
  Jack: 95,
};
console.log(marks);

var firstOutput = true; //Boolean
var secOutput = false;
console.log(firstOutput, secOutput);

var und; //undefined
console.log(und);

var remarks = null; //null
console.log(remarks);

var intArray = [1, 2, 3, 4, 5]; //Array (reference Type)
console.log(intArray);
console.log(intArray[0]);

//Operators

var a = 2;
var b = "2";
console.log(a == b);
console.log(a === b);
console.log(a != b);

// Assignment Operators
var c = 5;
c += 2;
c -= 2; // c = c - 2;
c *= 2;
c /= 2;
console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);

// Logical Operators

// Logical and
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Logical or
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Logical not
console.log(!false);
console.log(!true);

// Conditionals in JavaScript
var age = 21;
// Single if statement
if (age > 18) {
  console.log("You can drive");
}

// if - else statement
if (age > 18) {
  console.log("You can drive");
} else {
  console.log("You cannot not drive");
}

//if-else-if
time = 10;
if (time < 12) {
  greeting = "Good morning";
} else if (time < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}
console.log(greeting);

//loop
var arr = [1, 2, 3, 4, 5];
arrayLength = arr.length;
console.log(arrayLength); //will give 5, not 4

//for loop
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//forEach loop
arr.forEach(function (element) {
  console.log(element);
});

//while loop
let j = 0;
while (j < arr.length) {
  console.log(arr[j]);
  j++;
}

//do-while loop
let value = 0;
do {
  console.log(arr[value]);
  value++;
} while (value < arr.length);

// for..of loop
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
for (const cat of cats) {
  console.log(cat);
}

//break and continue
for (i = 0; i < arr.length; i++) {
  if (i == 2) {
    continue;
  } else if (i == 4) {
    continue;
  }
  console.log(arr[i]);
}

//array methods
const fruits = ["Apple", "Banana", "Strawberry"];
const moreFruits = ["Mango", "Cherry"];
const combinedFruits = fruits.concat(moreFruits);
console.log(combinedFruits);

fruits.pop();
console.log(fruits);

fruits.push("Cherry");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Mango");
console.log(fruits);

const nameArray = ["Dhyana", "Ankita", "Kuldip"];
console.log(nameArray);

const firstNameArrayCopy = [...nameArray];
console.log(firstNameArrayCopy);

const secNameArrayCopy = nameArray.slice();
console.log(secNameArrayCopy);

const thirdNameArrayCopy = Array.from(nameArray);
console.log(thirdNameArrayCopy);

var numberArray = [1, 2, 3, 6, 9, 5];
numberArray.sort();
console.log(numberArray);

// String Methods in JavaScript
let mySecondString =
  "Dhyana is a react native trainee and Dhyana is learning JavaScript";
console.log(mySecondString.length);
console.log(mySecondString.indexOf("react"));
console.log(mySecondString.indexOf("Dhyana"));
console.log(mySecondString.lastIndexOf("Dhyana"));
console.log(mySecondString.slice(0, 5));

//Date
let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());

//Math
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LN2);
console.log(Math.LOG2E);
console.log(Math.random());

function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}
console.log(degToRad(20));

document.write("<br/>");
document.write("<br/>");
document.write(Math.E);

document.write("<br/>");
document.write("<br/>");

//String methods
let str = "DhyanaDave";
let part = str.slice(1, 4);
let minusValuePart = str.slice(-4, -1);
document.write(part);
document.write("<br/>");
document.write(minusValuePart);
document.write("<br/>");
let strPart = str.substring(1, 4);
document.write(strPart);
document.write("<br/>");
let stringPart = str.substr(1, 4);
document.write(stringPart);

//sets
const letters = new Set();
letters.add("a");
letters.add("b");
console.log(letters);
letters.delete("a");
console.log(letters);
console.log(letters.size);
console.log(letters.values());

//Regular expressions
// let reg = /Dhyana/; //RE literal in js
reg = /Dhyana/g; //g means global
// reg = /Dhyana/i; //i means case insensitive
let s = "Dhyana is react native trainee and Dhyana is learning JavaScript";

// 1. exec() - This function will return an array for match or null for no match
let result = reg.exec(s);
console.log(result);
let result1 = reg.exec(s);
console.log(result1);

// 2. test() - Returns true or false
let result2 = reg.test(s);
console.log(result2);

// 3. match() - It will return an array of results or null
let result3 = s.match(reg);
console.log(result3);

// 4. search() - Returns index of first match else -1
let result4 = s.search(reg); // ---> This is right
console.log(result4);

//5. replace() - Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)
let result5 = s.replace(reg, "SHUBHAM");
console.log(result5);

//Normal func vs Arrow func

//Normal function
function add(a, b) {
  return a + b;
}
console.log(add(3, 3));

let addNum = function (x, y) {
  return x + y;
};
console.log(addNum(5, 3));

//Arrow func
let addNumber = (x, y) => x + y;
console.log(addNumber(10, 10));

//function
function avg(firstInput, secondInput) {
  c = (firstInput + secondInput) / 2;
  return c;
}
myAvg = avg(5, 5);
console.log(myAvg);

//Map() and filter()

//Ex of normal function
function toUpper(string) {
  return string.toUpperCase();
}
upper = toUpper("Hello");
console.log(upper);

//Ex of Map()
function toUpper(string) {
  return string.toUpperCase();
}
const myCats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const upperCats = myCats.map(toUpper);
console.log(upperCats);

//Ex of filter()
function filterCat(cat) {
  return cat.startsWith("L");
}
const filtered = myCats.filter(filterCat);
console.log(filtered);

//JSON (JavaScript Object Notation)
let jsonObj = {
  name: "Dhyana Dave",
  course: "BE",
  domain: "React Native",
};
console.log(jsonObj);

let myJsonString = JSON.stringify(jsonObj);
console.log(myJsonString);

myJsonString = myJsonString.replace("Dhyana Dave", "Dhyana");
console.log(myJsonString);

newJsonObj = JSON.parse(myJsonString);
console.log(newJsonObj);

//Asynchronous
//Ex-1
console.log("I");
setTimeout(() => {
  console.log("am");
}, 4000);
console.log("Dhyana");

//Ex-2 //async returns promise, await is wait for promise
async function understandingAsync() {
  console.log("Inside function");
  const response = await fetch("https://api.github.com/users");
  console.log("before response");
  const users = await response.json();
  console.log("users resolved");
  return users;
}

console.log("Before calling function");
let async = understandingAsync();
console.log("After calling function");
console.log(async);
async.then((data) => console.log(data));
console.log("Last line of this js file");

//This keyword

const person = {
  firstName: "Dhyana",
  lastName: "Dave",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person);
console.log(person.fullName());

//ES6 Remainingt Topics

// Class
// unnamed
let myRectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(myRectangle.name);

// named
let newRectangle = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(newRectangle.name);

//Prototype methods
class mineRectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new mineRectangle(10, 10);
console.log(square.area);

//Symbol
const trainee = {
  firstName: "Dhyana",
  lastName: "Dave",
  stack: "ReactNative",
};

let id = Symbol("id");
trainee[id] = 101;

console.log(trainee.id); //undefined
console.log(trainee[id]);

//Default parameter value
function myFunction(x, y = 10) {
  return x + y;
}
console.log(myFunction(5));

//function Rest parameter
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
let sumOfVal = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(sumOfVal);

//Spread Operators - useed to combine array and objects

//Ex1
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

//Ex2
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;
console.log(one);
console.log(two);
console.log(rest);

//Ex3
const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};
const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};
const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
console.log(myUpdatedVehicle); //color will be overwritten by the last object that was passed

//Ternary operator

//normal if-else
let intValue = 10;
if (intValue > 5) {
  console.log("number is greater than 5");
} else {
  console.log("number is less than 5");
}

//Ternary Operator
intValue > 5
  ? console.log("number is greater than 5")
  : console.log("number is less than 5");

//Array
let myNumArray = Array.from("ABCDEFG");
console.log(myNumArray);

const myFruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = myFruits.keys();
console.log(keys);

//Error handling & Try - Catch Block
let traineeName = "Dhyana";
if (traineeName == undefined) {
  throw Error("Trainee name is undefined");
} else {
  console.log("Trainee name is " + traineeName);
}

try {
  let newTraineeName;
  if (newTraineeName == undefined) {
    throw Error("Trainee name is undefined");
  } else {
    console.log("Trainee name is " + newTraineeName);
  }
} catch (error) {
  console.log("Trainee name is not available");
  console.log(error.message);
} finally {
  console.log("Finally we'll run this");
}
