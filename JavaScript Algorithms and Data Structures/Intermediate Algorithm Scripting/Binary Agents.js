function binaryAgent(str) {
    return String.fromCharCode(
        ...str.split(" ").map(function (char) {
            return parseInt(char, 2);
        })
    );
}

// test here
binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

// Everything Be True
function truthCheck(collection, pre) {
    return collection.every(function (element) {
        return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");

// Arguments Optional
function addTogether() {
    const [first, second] = arguments;

    if (typeof (first) === "number") {
        if (typeof (second) === "number") return first + second;
        if (arguments.length === 1) return (second) => addTogether(first, second);
    }
}

addTogether(2, 3);

// Make a Person
var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly

    let [firstName, lastName] = firstAndLast.split(' ');

    this.getFirstName = function () {
        return firstName;
    };

    this.getLastName = function () {
        return lastName;
    };

    this.getFullName = function () {
        return `${firstName} ${lastName}`;
    };

    this.setFirstName = function (first) {
        firstName = first;
        return firstName;
    };

    this.setLastName = function (last) {
        lastName = last;
        return lastName;
    }

    this.setFullName = function (firstAndLast) {
        firstName = firstAndLast.split(' ')[0];
        lastName = firstAndLast.split(' ')[1];
        return `${firstName} ${lastName}`;
    }

};

const bob = new Person('Bob Ross');
bob.getFullName();

// Map the Debris
function orbitalPeriod(arr) {
    const GM = 398600.4418; //in km3s-2.
    const earthRadius = 6367.4447; //in km
    let resultArray = [];

    function findOrbitalPeriod(avgAlt) {
        //Using Kepler's Third Law, the orbital period T (in seconds), rounded, when given the AvgAlt of the body orbiting Earth.
        //See more on https://en.wikipedia.org/wiki/Orbital_period
        return Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + avgAlt, 3) / GM));
    }

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    resultArray = arr.map(obj => {
        let rObj = {};
        rObj.name = obj.name;
        rObj.orbitalPeriod = findOrbitalPeriod(obj.avgAlt)
        return rObj;
    });

    return resultArray;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);