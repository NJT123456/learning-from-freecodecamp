function reverseString(str) {
    var newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    /* Here hello's length equals 5
       For each iteration: i = str.length - 1 and newString = newString + str[i]
       First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
       Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
       Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
       Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
       Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
   End of the FOR Loop*/
    return newString;
}

console.log(reverseString("hello"))