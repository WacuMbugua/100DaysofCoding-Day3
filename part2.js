//Accessing Nested Arrays
var myPlants = [
    {
        type: "flowers",
    list: [
        "rose",
        "tulip",
        "dandelion",  
    },
{
    type: "trees",
    list: [
        "fir",
        "pine",
        "birch",
    ]
}
];

var secondTree = myPlants[1].list[1]; //console.logs pine

//Record Collection
Collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You Give Love a Bad Name"
        ]
        ,
        "2468": {
            "album": "1999",
            "artist": "Prince",
            "tracks": [
                "1999",
                "Little Red Corvette"
            ]
            ,
            "1245": {
                "artist": "Robert Plamer",
                "tracks": []
                ,
                "5439": {
                    "album": "ABBA Gold"
                    }
            }
        }
    }
}

//json.parse and json.stringify - keeping copies

var collectionCopy = JSON.parse(JSON.stringify(colelction));

function updateRecords(id, prop, value) {
    if (value ==="") {
        delete collection[id][drop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}
console.log(updateRecords(5439, "artist", "ABBA"));

//ITERATE WITH WHILE LOOPS
//loops allow you to run same code multiple times
var myArray = [];

var i = 0
while (i <5) {
    myArray.push(i);
    i++;
}
//testing
console.log(myArray); //outputs [0, 1, 2, 3, 4]

//ITERATE WITH FOR LOOPS
//FOR loops are the most common types of loops in js

var ourArray = [];

for (var i = 0; i <5; i++) {
    ourArray.push(i);
}
console.log(myArray);

//iterate odd numbers with a For loop

var ourArray = []

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}
console.log(ourArray); //outputs [0, 2, 4, 6, 8]

var myArray = [];
for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}
console.log(myArray); //outputs [1, 3, 5, 9]

//Count Backwards with a For Loop
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}
console.log(ourArray); //outputs [10, 8, 6, 4, 2]

var myArray = []
for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}
console.log(myArray); //outputs [9, 7, 5, 3, 1]

//Iterate through an array with a For loop
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}
console.log(ourTotal); //outputs 42

var myArr = [2, 3, 4, 5, 6];

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}
console.log(total); //outputs 20

//Nesting for loops

function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j=o; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;
}

var product = multiplyAll([[1,2], [3,4], [5,6,7]]); //three elemnts

console.log(product); //outputs 5040

//Iterate with Do..While Loops

var myArray = []
var i = 10

do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray); //outputs 11,[10]

//Profile Lookup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0731297233",
        "likes": ["pizza", "coding", "brownie points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0702686233",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "07215896321",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";

        }

    }
return "No such contact";
}

var data = lookUpProfile("Akira", "likes");

console.log(data); //outputs ["pizza", "coding", "brownie points"]

var data = lookUpProfile("Sherlock", "lastName"); 

console.log(data); //Holmes

var data = lookUpProfile("Sherlock", "school"); 

console.log(data); //No such contact