function alphabeticalOrder(arr) {
    // Only change code below this line

    return arr.sort(function (a, b) {
        return a === b ? 0 : a < b ? -1 : 1;
    })
    // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]))

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Only change code below this line
    return [].concat(arr).sort(function (a, b) {
        return a - b;
    });
    // Only change code above this line
}

nonMutatingSort(globalArray);