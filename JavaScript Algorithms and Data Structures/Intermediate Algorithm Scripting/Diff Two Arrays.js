function diffArray(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];

    function diff(a, b) {
        return a.filter(item => b.indexOf(item) === -1);
    }
}

// DNA Pairing
function pairElement(str) {
    // create object for pair lookup
    const pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };

    // map character to array of character and matching pair
    return str
        .split("")
        .map(x => [x, pairs[x]]);
}

// test here
pairElement("GCG");

// Missing letters
function fearNotLetter(str) {
    for (let i = 1; i < str.length; ++i) {
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
}
fearNotLetter("abce");

// Sum All Primes
function sumPrimes(num) {
    // Check all numbers for primality
    let primes = [];
    for (let i = 2; i <= num; i++) {
        if (primes.every((prime) => i % prime !== 0))
            primes.push(i);
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
}

sumPrimes(10);