function rot13(str) {
    var decodedStr = "";

    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            // Capital letters
            decodedStr += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Lowercase letters
            decodedStr += String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
        } else {
            // Non-alphabetic characters
            decodedStr += str.charAt(i);
        }
    }

    return decodedStr;
}
