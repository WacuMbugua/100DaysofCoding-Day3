//Object and Array Initializers
//object and arracy initializers are expressions whose value is a newly created object or array. also callled object or array literals
//an array initailiser is a comma-seperated list of expressions contained within square brackets
//[] an enpty array: no expressions inside brackets means no elements
[1+2, 3+4] //a 2-elemnt array. first elemnt is 3 and second is 7
//element expressions in an array initializer can themsalves be array initializers which means these exp can create nested arrays
var matrix =[[1,2,3], [4,5,6], [7,8,9]];

//undefined elemnts can be included in an array literal by simply ommitting a value between commas
//the array below contains five elemnts, including three undefined

var sparseArray = [1,,,,5];

//BACK TO OBJECTS
//javaScript's fundamental datatype is the object
//an object is a composite value; it aggregates mulyiple values and allows you to store and retrieve those values by name. an object is an unordered colelction of properties
//cont, each of which has a name and a value
//property names are strings, so, essent. objects map strings to values
//in addition to maintaining its own set of properties, a JS object also inherits the properties of another objct, known as its ''prototype''
//the methods of an object are typically inherited properties - 'prototypical inheritance'
//any value in JS that is not a string, a number, true, false, null or undefined, is an object
//even though strings, numbers and booleans are not objects, they behabve like *immutable objects*
//a property has a name and a value
//property name maybe any string, incl empty string, bot no object may have two properties with the same name
//each property has associated values, 'property attributes':
    //writable - whether the value of the property can be set
    //enumarable - whether the property name is returned by a for/in loop
    //configurable - specifies whether the property can be deleted and whether its attr can be altered

    //in addition to its priperties, every object has three associated object attributes
        //a. an object's prototype is a refernce to another object from which properties are inherited
        //b. an object's class is a string that categorizes the type of an object
        //c. an object's extensible fag specifies whether new prperties may be added to the object
    //three broad categories of JS Objects
    //1. native object - an object or class of objects defined by JS. eg arrays, functions, dates, and regular expressions
    //2. host obejct - an object defined by the host environment eg a web browser eg HTML elemnt objects defining the structure of the page
    //3. user-defined object is any object created by the execution of JS code
    //4. own property - a property defined directly on an object
    //5. inherited property - a property defined by an object's protoype obj

    //CREATING OBJECTs
    //easiest wy is to include an object litral
    //an object literal is a comma-seperated list of colon-seperated name:value pairs, enclosed within curly braces
    var empty = {} //an object with no properties
    var point = {x:0, y:0}; // two properties
    var point2 = {x:point.x, y:SecurityPolicyViolationEvent.y+1}; // more complex values
  
    var ourDog = {
        "name": "Camper", //proerty
        "legs": 4, //another property
        "tails": 1, //another one
        "friends": ["everything"]
    };
   //accessing obejct prperties
    //1. with dot notation
    //eg
    var testObj = {
        "hat": "ballcap",
        "shirt": "jersey",
        "shoes": "cleats"
    };
    //the dot method
    var hatValue = testObj.hat; //to find the value of hat
    var shirtValue = testObj.shirt; //to find the value of shirt
     
    //2. Accessing with bracket notation
    //required when property names have spaces
    //eg
    var testObj = {
        "an entree": "harmburger",
        "my side": "vegetables",
        "the drink": "water"
    };
    //brackets method
    var entreevalue = testObj["an entree"];
    var drinkValue = testObj["the drink"]

    //Acessing Object Properties with Varables
    var testObj = {
        12: "Namath",
        16: "Montana",
        19: "Unitas"
    };
    //
    var playerNumber = 16
    var player = testObj[playerNumber]; //outputs Montana

    //Updating Object Properties
    //using dot notation

var ourDog = {
        "name": "Camper", //proerty
        "legs": 4, //another property
        "tails": 1, //another one
        "friends": ["everything"]
    };
    console.log(name) //outputs Camper
    //but..
    ourDog.name = "Happy Camper"; //updates the name
console.log(name); //outputs Happy Camper

//add new properties to an object
//can be done either through dot or bracket notation
var ourDog = {
    "name": "Camper", //proerty
    "legs": 4, //another property
    "tails": 1, //another one
    "friends": ["everything"]
};

ourDog.bark = "bow-wow"; //adds a new roperty to the above

//Delete properties from an object

var ourDog = {
    "name": "Camper", //proerty
    "legs": 4, //another property
    "tails": 1, //another one
    "friends": ["everything"]
};

delete ourDog.bark; //deletes the property

//Using Objects for lookups
 var lookup = {
     "alpha": "Adams",
     "bravo": "Boston",
     "charlie": "Chicago",
     "delta": "Denver",
     "echo": "Easy",
     "foxtrot": "frank"
 };
result = lookup[val];
//test
console.log(phoneticLookup("Charlie")); //outputs Chicago

//Testing Objects for properties
//using hasOwn
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];   
    } else {
        return "Not Found"
    }
}
//test
console.log(checkObj("gift")); //outputs Pony
console.log(checkObj(hello)); //outputs Not Found

//Manipulating Complex Objects
 var myMusic = [
     {
         "artist": "Billy joel",
         "title": "Piano Man",
         "release_year": 1973,
         "formats": [
             "CD",
             "8T",
             "LP",
         ],
         "gold": true
     },
     { //below is an addition to the original above. kinda like json
         artist: "Wacu Mbugua",
         "title": "Cereeal Man",
         "release_year": 2019,
         "formats": [
             "Youtube Video"
         ]
         
     }
 ]

 //Accessing Nested Objects
 var myStorage = {
     "car": {
         "inside": {
             "glove box": MSGraphicsTrust,
             "passenger seat": "crumbs"
         },
         "outisde": {
             "trunk": "jack"
         }
     }
 };

 var gloveBoxContents = myStorage.car.inside["glove box"];
//test
console.log(gloveBoxContents); //outputs maps