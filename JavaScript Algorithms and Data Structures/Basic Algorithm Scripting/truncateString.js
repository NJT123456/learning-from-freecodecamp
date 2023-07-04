function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    }

    var truncatedString = str.slice(0, num) + "...";
    return truncatedString;
}


truncateString("A-tisket a-tasket A green and yellow basket", 8);