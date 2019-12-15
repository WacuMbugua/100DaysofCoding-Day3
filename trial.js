alert('Site Under Construction');


/* a variable is like a box*/
var myName = "Wacu Mbugua"
myName = 7
Let myName = "MW"

const pi = 3.14
/* var is for the whole ile, let is for the immediate environment and const should never change*/
/*Declaring Variables*/
var a;
var b = 2;

a =7 //a is already declared*/
//console.log allows you to see output in the console*/
var a = 9;
// var a is declaring, = intializes*/
var a;
var b;
var c;
a = 5
b = 10
c = "I am a";2
//initializing the unitialized variables (19-21)
a = a + 1;
b = b + 5;
c = c + " String!";
//Case sensitivity in variables
//capitalization matters
//eg
var TitleCaseOver //is not:
TitleCaseOver

var sum = 10 + 10; //addition
console.log(sum);
 var difference = 45 - 33 //subtraction
 var product = 8 * 15 //multiplication
 var quotient = 55/11 //division
 //incrementing = adding one
 var myVar = 87;
 myVar++;
 //decimals
 var myDecimal = 0.004
 //math for decimals is the same as integers
 //Finding a reminder after division. remiander funct tells whether a number is odd or even. if output is 0 for instance
 var remainder 
 remainder = 11 % 3; //answer should be 2
 //compounded
 //eg, if
 var a = 3;
 var b = 17;
 var c = 12;
 //to add them
  a = a + 12;
  b = 9 + b;
  c = c + 7;
  //shortcut
  a += 12
  b += 9
  c += 7
  //same shortcut applies for subtraction, products and dividing '-=' '*=' and '/='
 //DECLARING STRING VARIABLES - use "" which show the start and end of a string
 var firstName = "Wacu";
 var lastName = "Mbugua";
 //ESCAPING LITERAL QUOTES IN STRINGS
//eg
var myStr = "I am a "double quoted string inside "double quotes"
//to escape a quote, ie, so js does not interpret it as the start and end of a str, use /. eg
//using /
var myStr = "I am a \"double quoted\" string inside \"double quotes"
//using single quotes
var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>'
//ESCAPE SEQUENCES IN STRINGS
var myStr = "FirstLine\n\t\\secondLine\n\ThirdLine"
//CONCATENATING STRINGS WITH PLUS OPERATOR
var myStr = "I come first." + "I come second.";
var myStr = "This is the start. " + "This is the end."; //ooutput This is the start. This is the end
//CONCATENATING STRINGS WITH PLUS EQUALS OPERATOR
var myStr = "I come first. ";
myStr += "I come second."
var ourStr = "This is the start. "
ourStr += "This is the end."
//CONSTRUCTING STRINGS WITH VARIABLES
var ourName = "freecodecamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

var myNae = "Wacu"
var myStr = "my name is " = myName + " and I am well!";
//APPENDING VAR TO STRINGS +=
var anAdjective = "Awesome!"
var ourStr = "coding is ";
ourStr += anAdjective;

//FINDING LENGTH OF STR use funct '.length'
var firstNameLength = 0;
var firstName = "Ada"
firstNameLength = firstName.length
onmouseleave.log(firstNameLength) //output should be 3
//BRACKET NOTATION TO FIRST CHARACTER IN STR - a way to get a specific character eg the fifth or first
//javascript has zero-based indexing which means it starts counting from 0, not 1
//eg

var firstLetterFirstName = "";
var firstName = "Ada";
firstLetterFirstName = firstName[0] //answer should be A
//STRING IMMUTABILITY - str are immutable or cant be changed
//to change a str
//eg
var myStr = "Jello World";
//you put
myStr = "Hello world";
//to get the last letter in a str even when you dont know how many letters it has
var firstName ="Ada";
var lastLetterFirstNae = firstName[firstName.length - 1];
//WORD BLANKS
var result = "";
result += "The " +myAdjective + " " + myNoun + " " + myVerb + " to the store" + " " + myAdverb
return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
//result should be The big dog ran to the store quickly
//STORING MULTIPLE VALUES IN AN ARRAY
var ourArray = ["John, 23"];
//arrays always use []
//NESTED ARRAYS - ARRAY WITHIN ARRAY
//eg
var ourArray = [["the universe", 42], ["everything", 101010]];
//ACCESS DATA WITH INDEXES
var ourArray = [50, 60, 70];
var ourData = ourArray[0]; //should be 50
//MODIFYING/UPDATING ARRAY DATA WITH INDEXES
var ourArray = [18, 64, 99];
ourArray[1] = 45
//OUTPUT SHOULD NOW BE [18, 45, 99]
//ACCESS MULTI-DIMENSIONAL ARRAYS WITH INDEXES
var myArray = [[1,2,3], [4,5,6], [7,8,9], [10,11,12], 13, 14];
var myData = myArray[2][1]; //output should be 8
//MANIPULATE ARRAYS WITH PUSH ()
var ourArray = ["Stimpson", "J","Cat"];
ourArray.push(["happy", "joy"]); //output should be ["Stimpson", "J","Cat" ["happy", "joy"]]
//MANIPULATE ARRAYS WITH POP ()
var ourArray = [1,2,3];
var removedFromourArray = ourArray.pop(); //output should be removedFromourArray = 3, and ourArray = [1,2]
//MANIPULATE ARRAYS WITH SHIFT () - removes first element
var ourArray = ["Stimpson", "J","Cat"];
var removedFromourArray = ourArray.shift(); //output ["J","Cat"]
//MANIPULATE WITH UNSHIFT () - adds fisrt element
var ourArray = ["J","Cat"]
ourArray.unshift("happy");
 //output ["happy", "J","Cat"]
 //SHOPPING LIST
 var myList = [["cereals", 3], ["milk", 2], ["bananas,", 3], ["juice", 2], ["eggs", 12]]
 //WRITE REUSABLE CODE WITH FUNCTIONS
 //eg to c reate a function called ourreusablefunction:
 function ourReusableFunction() {
    console.log("Heyya, world");
 }
 function reusablefunction(){
     console.log("hi world!");
 }
    //PASSING VALUES TO FUNCTIONS WITH ARGUMENTS
function ourFunctionWithArgs(a, b) {
    console.log(a, -b);
}
ourFunctionWithArgs(10, 5); //outputs 5, ie 10-5
function FunctionWithArgs(a, b) {
    console.log(a +b);
}
FunctionWithArgs(10, 5) //outputs 15, ie 10+5
//GLOBAL SCOPE AND FUNCTIONS; g.scope means can be seen in all your javascript
var myGlobal = 10
function fun1() {

}
   function fun2() {
       var output = "";
       if (typeof myGlobal != "undefined") {
           output += "myGlobal: " + myGlobal;
       }
       if (typeof oopsGlobal != "undefined") {
           output += " myGlobal: " + oopsGlobal;
       }
   } 
   //LOCAL SCOPE AND FUNCTIONS
   function myLocalScope() {
       var myVar = 5
       console.log(myVar);
   }
   //myVar now cant output outside the function
   //GLOBAL VS LOCAL FUNCTIONS
   //Local variable takes precedence over global
   var outerWear = "Tshirt";
    function myOutfit() {
        var outerWear = "sweater";
        return outerWear;
    
    }
console.log(myOutfit())//outputs sweater
console.log(outerWear); //outputs tshirt
//RETURN A VALUE FROM A FUNCT WITH RETURN
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10)); //output is 3
//UNDERSTANDING UNDEFINED VALUE RETURNED FROM A FUNCTION
var sum = 0
function addThree() {
    sum = sum +3;
}
function addFive() {
    sum += 5;
}
//ASSIGGNMENT WITH A RETURNED VALUE
var changed = 0;
function changed(num) {
    return (num + 5) / 3;
}
changed =  change(10);

//STAND IN LINE
function nextInLine(arr, item) {
   arr.push(item);
   return arr.shift();
}
var testArr = [1,2,3,4,5];


console.log("Before: " + JSON.stringify(testArr)); //output Before: [1,2,3,4,5]
console.log(nextInLine(testArr, 6)); //output 1
console.log("After. " + JSON.stringify(testArr)); //output After: [2,3,4,5,6]
//BOOLEAN VALUES
function welcomeToBooleans() {
    return false;
}
//what if
function ourTrueorFalse(isItTrue) {
    if (isItTrue) {
        return "yes it's true";
    }
    return "no, it's false;";
}
//Equality Op comparison
function testEqual(val) {
    if(val ==12) {
        return "Equal"
    }
    return "not equal"
}
console.log(testEqual(10)); //output not equal
//STRICT Operator '==='
//Comparing Inequality Op
function testNotEqual(val) {
    if(val != 12) {
        return "Equal"
    }
    return "not equal"
}
console.log(testEqual(10)); //output not equal
//STRict Inequality op

function testGreaterThan(val) {
    if(val > 100) {
        return "Over 100"
    }
    return "Over 10"
}
console.log(testGreaterThan(10)); //output 
//******* */
//ITERATE WITH DO...WHILE LOOPS
var myArray = [];
var i = 10;

while (i < 5) {
    myArray.push(i);
    i++;

} while (i < 5)
//PROF LOOKUP
function lookupProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if(conatcts[i].firstName === name) {
          return contacts[i][prop] || "no such property"; 
        }
    }
    return "no such contacts"
}
    
}
//Random fractions
function randomFraction() {
    return Math.random();
}
console.log(randomFraction()); //output 0.2345822317793212
//random whole numer
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
//Ternary Operator
function checkEqual(a, b)
if(a === b) {
    return true;

}
return false;
//or
function checkEqual(a, b)
if(a === b) ? true : false;
//multiple ternary
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
// var, let..
//var is global
//let is local
//Compare Scopes
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("block scope i is: ", i);
    }
    console.log("function scope i is: ", i);
    return i
}
checkScope();
//console output - Blockscope i is: "blocjk scope" Function scope i is function scope
//Read-only with const
function printManyTimes(str) {
    "use strict";
   const SENTENCE = str + "is cool!";
}
    
}
//mUTATE AN ARRAY DECLARED WITH CONST
const s = [5, 7 , 2];
function editInPlace() {
    "use strict";
    //to reassign the array
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
//PREVENT OBJECT MUTATION
//use object.freeze
//ARROW FUNCTIONS TO WRITE CONCISE ANONYMOYUS FUNCTIONS
var magic = function()
    return new Date();
    //to
    var magic = () => new Date();
    //ARROW FUNCTS WITH PARAMETERS
    var myConcat = funtion(arr1, arr2) {
        return arr1.concat(arr2);
    };
    //to an arrow function
    var myConcat = (arr1, arr2) => arr1.concat(arr2);
    //HIGH ORDER ARROW FUNCTIONS
    //REST OPERATOR
    const sum = (function() {
        return function sum (x, y, z) {
            const args = [ x, y z];
            return args.reduce((a, b)) => a+ b, 0);
        };
    }) ();
    //using rest operator ...
    const sum = (function() {
        return function sum (...args) {
            const args = [ x, y, z];
            return args.reduce((a, b)) => a+ b, 0);
        };
    }) ();
    //the spread operator used to spread out an array '...'
    //DECONSTRUCTING ASSIGNMENT TO ASSIGN VARIABLES FROM OBJECTS
    //eg
    var voxel = {x: 3.6, y: 7.4, z: 6.54 };
    //old way of reassigning
    var x = voxel.x;
    var y = voxel.y;
    var z = voxel.z;
    //new way
    const { x: a, y : b, z : z} = voxel;



