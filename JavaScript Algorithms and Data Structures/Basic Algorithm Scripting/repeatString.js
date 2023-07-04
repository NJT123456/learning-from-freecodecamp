function repeatStringNumTimes(str, num) {
    if (num < 0) {
        return "";
    }

    var repeatedString = "";
    for (var i = 0; i < num; i++) {
        repeatedString += str;
    }

    return repeatedString;
}
repeatStringNumTimes("abc", 3);