function largestOfFour(arr) {
    var maxValues = [];
    for (var i = 0; i < arr.length; i++) {
        var subArray = arr[i];
        var maxValue = Math.max.apply(null, subArray);
        maxValues.push(maxValue)
    }
    return maxValues;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);