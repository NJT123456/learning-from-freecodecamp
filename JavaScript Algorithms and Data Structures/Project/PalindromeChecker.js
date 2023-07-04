function palindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    var alphanumericStr = str.replace(/[\W_]/g, '').toLowerCase();

    // Reverse the alphanumeric string
    var reversedStr = alphanumericStr.split('').reverse().join('');

    // Check if the reversed string is equal to the original string
    return alphanumericStr === reversedStr;
}
