// // DOM Manipulation
var elem = document.getElementById("click");
console.log(elem);

let elemClass = document.getElementsByClassName("container");
console.log(elemClass);
elemClass[0].style.background = "blue";
elemClass[1].classList.add("bg-primary");
document.getElementById("click").style.border = "2px solid Yellow";

console.log(elem.innerHTML);
console.log(elem.innerText);
console.log(elemClass[1].innerText);
console.log(elemClass[1].innerHTML);

tn = document.getElementsByTagName("div");
console.log(tn);

createdElement = document.createElement("p");
createdElement.innerText = "this is para";
createdElement.style.color = "white";
tn[0].appendChild(createdElement);

//Selecting using query
sel = document.querySelector(".container");
console.log(sel);
selector = document.querySelectorAll(".container");
console.log(selector);

// Array Splice(Startindex, deletecount, item)
const months = ["jan", "march", "Apr"];
months.splice(1, 0, "feb");
console.log(months);

//JS Array Destructuring
//Swapping var
let x = "true";
let y = "false";
[x, y] = [y, x];
console.log(x);
console.log(y);

//Default values
var a, b;
[a = 6, b = 7] = [1];
console.log(a);
console.log(b);

// Destructuring
const myArray = ["one", "two"];
const [red, yellow, green, blue] = myArray;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); //undefined

// Assigning the rest of an array to a variable
const [first, ...second] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // [2, 3]

function clicked() {
  console.log("The button was clicked");
}

//Decrement and Increment
let myNum = 3;
let myAnotherNum = --myNum;
console.log(myAnotherNum);

let myNumber = 3;
let myNumb = myNumber--;
console.log(myNumb)
console.log(myNumber)

