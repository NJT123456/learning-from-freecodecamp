function convertToRoman(num) {
    var decimalVals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNums = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];

    var romanStr = "";

    for (var i = 0; i < decimalVals.length; i++) {
        while (num >= decimalVals[i]) {
            romanStr += romanNums[i];
            num -= decimalVals[i];
        }
    }

    return romanStr;
}
