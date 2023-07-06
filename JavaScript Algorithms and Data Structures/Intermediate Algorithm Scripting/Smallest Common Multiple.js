function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;
    // Largest possible value for SCM
    let upperBound = 1;
    for (let i = min; i <= max; i++) {
        upperBound *= i;
    }
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
        // Check if every value in range divides 'multiple'
        let divisorCount = 0;
        for (let i = min; i <= max; i++) {
            // Count divisors
            if (multiple % i === 0) {
                divisorCount += 1;
            }
        }
        if (divisorCount === numberDivisors) {
            return multiple;
        }
    }
}

smallestCommons([1, 5]);

//  Drop it 
function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;
}

// test here
dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
});

dropElements([1, 2, 3], function (n) { return n < 3; });

// Steamroller
function steamrollArray(arr) {
    let flattened = [];

    arr.map(val => {
        if (!Array.isArray(val)) {
            flattened.push(val);
        }
        else {
            flattened.push(...steamrollArray(val));
        }
    })

    return flattened;
}

steamrollArray([1, [2], [3, [[4]]]]);