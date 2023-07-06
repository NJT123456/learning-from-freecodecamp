function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
        sumBetween += i;
    }
    return sumBetween
}

sumAll([1, 4]);

// Wherefore art thou
function whatIsInAName(collection, source) {
    // What's in a name?
    const arr = [];
    for (let i = 0; i < collection.length; i++) {
        let found = true;
        for (const sourceProp in source) {
            if (collection[i][sourceProp] !== source[sourceProp]) {
                found = false;
                break;
            }
        }
        if (found) arr.push(collection[i]);
    }
    return arr;
}

// Spinal Tap Case
function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');

// Sum All Odd Fibonacci Numbers
function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }
  
  // test here
  sumFibs(4);

