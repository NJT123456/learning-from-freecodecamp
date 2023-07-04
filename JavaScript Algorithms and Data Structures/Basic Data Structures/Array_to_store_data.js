// Use an Array to Store a Collection of Data
console.log('Use an Array to Store a Collection of Data')
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(`simpleArray = ${simpleArray.length}`);

let complexArray = [
    [
        {
            one: 1,
            two: 2
        },
        {
            three: 3,
            four: 4
        }
    ],
    [
        {
            a: "a",
            b: "b"
        },
        {
            c: "c",
            d: "d"
        }
    ]
];

console.log(`complexArray = ${complexArray.length}`);

// Access an Array's Contents Using Bracket Notation
console.log("\nAccess an Array's Contents Using Bracket Notation")
let ourVariable = simpleArray
console.log(ourVariable[0]) // output: one
ourVariable[0] = "five"
console.log(`new ourvariable: ${ourVariable}`)

// Add Items to an Array with push() and unshift()
console.log("\nAdd Items to an Array with push() and unshift()")
function mixedNumbers(arr) {
    arr.unshift("I", 2, "three")
    arr.push(7, "VIII", 9)
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

// Remove Items from an Array with pop() and shift()
console.log("\nRemove Items from an Array with pop() and shift()")
function popShift(arr) {
    let popped = arr.pop('is');
    let shifted = arr.shift('not');
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

// Remove Items Using splice()
console.log("\nRemove Items Using splice()")
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(`We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10 is array: ${arr}`);

// Remove Items Using splice()
console.log("\nAdd Items Using splice()")
function htmlColorNames(arr) {
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond")
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// Copy Array Items Using slice()
console.log("\nCopy Array Items Using slice()")
function forecast(arr) {
    arr = arr.slice(2, 4)
    return arr;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// Copy an Array with the Spread Operator
console.log("\nCopy an Array with the Spread Operator is ...")
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr])
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));

// Combine Arrays with the Spread Operator
console.log("\nCombine Arrays with the Spread Operator is ...")
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
}

console.log(spreadOut());

// Check For The Presence of an Element With indexOf()
console.log("\nCheck For The Presence of an Element With indexOf()")
function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Iterate Through All an Array's Items Using For Loops
console.log("\nIterate Through All an Array's Items Using For Loops")
// function filteredArray(arr, elem) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[j].indexOf(elem) >= 0) {
//                 newArr.pop[j];
//             }
//         }
//     }
//     return newArr;
// }
function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter"));

// Create complex multi-dimensional arrays
console.log("\nCreate complex multi-dimensional arrays")
let myNestedArray = [
    // Only change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    // Only change code above this line
];

// Create complex multi-dimensional arrays
console.log("\nCreate complex multi-dimensional arrays")
let NestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    [
        ['deep'], ['loop', 'shift', 6, 7, 1000, 'method']
    ],
    [
        [
            ['deeper'], ['concat', false, true, 'spread', 'array']
        ]
    ],
    [
        [
            [
                ['deepest'], ['mutate', 1327.98, 'splice', 'slice', 'push']
            ]
        ]
    ],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
]

console.log(NestedArray[3][0][0][0][0])

// Add Key-Value Pairs to JavaScript Objects
console.log("\nAdd Key-Value Pairs to JavaScript Objects")
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

foods['bananas'] = 13;
foods.grapes = 35;
const food = 'strawberries'
foods[food] = 27

console.log(foods);

// Modify an Object Nested Within an Object
console.log("\nModify an Object Nested Within an Object")
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

userActivity.data.online = 45;

console.log(userActivity);

// Access Property Names with Bracket Notation
console.log("\nAccess Property Names with Bracket Notation")
let foodss = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    return foodss[scannedItem]
}

console.log(checkInventory("apples"));

// Use the delete Keyword to Remove Object Properties
console.log("\nUse the delete Keyword to Remove Object Properties")
let foodsss = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

// Only change code below this line
delete foodsss.oranges
delete foodsss.plums
delete foodsss.strawberries
// Only change code above this line

console.log(foodsss);

// Check if an Object has a Property
console.log("\nCheck if an Object has a Property")
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    return (
        'Alan' in userObj &&
        'Jeff' in userObj &&
        'Sarah' in userObj &&
        'Ryan' in userObj
    );
}

console.log(isEveryoneHere(users));

// Iterate Through the Keys of an Object with a for...in Statement
console.log("\nIterate Through the Keys of an Object with a for...in Statement")
function countOnline(allUsers) {
    let counter = 0;
    for (const key in allUsers) {
        var current_value = allUsers[key];
        if ('online' in current_value && current_value['online']) {
            counter++;
        }
    }
    return counter;
}

console.log(countOnline(users));

// Generate an Array of All Object Keys with Object.keys()
console.log("\nGenerate an Array of All Object Keys with Object.keys()")
function getArrayOfUsers(obj) {
    return Object.keys(obj)
}

console.log(getArrayOfUsers(users));

// Modify an Array Stored in an Object
console.log("\nModify an Array Stored in an Object")
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));