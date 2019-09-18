//date and time
var now = new Date();

console.log("The time at the beep is," now);

//number to a string
var num = 15;
var n = num.toString();

//string to number
var text = '3.14someRandomStuff';
var pointNum = parseFloat(text);

//datatypes and printing out what they are
// Boolean

// Null

// Undefined
if (typeof xyz === "undefined")
alert("xyz is undefined.")

// Number
var index = 8;
var result = (typeof index === 'number');

// NaN

// String
var authorOf = "Terry Pratchett";
console.log(typeof authorOf)

//adds 2 numbers together
const addMeTogether = function (num1, num2){
    console.log(num1, num2);
    const added = num1 + num2;
    console.log(added);
    }
    
    addMeTogether(6, 10);

//runs only when 2 things are true
let myName = "Chelsea"
let myHairColor = "Brown"

if((myName == "Chelsea") && myHairColor == "Brown"){
console.log("Hello!");
}

//runs when 1 of 2 things are true
var x = 5
var y = 20
function largerThan (x,y) {
    if (x < 15 || y < 15) {
        console.log("One of these is larger");
    }
}

console.log(largerThan(5,20))

//runs when both things arent true
var x = 21
var y = 20
function unTrue(x, y) {
    if (x < 30 && y < 30 ) {
        console.log("Both are true");
    } else {
        console.log("Neither are true");
    }
}

console.log(unTrue(21,20))