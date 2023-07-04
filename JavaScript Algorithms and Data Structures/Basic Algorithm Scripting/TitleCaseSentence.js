function titleCase(str) {
    var words = str.toLowerCase().split(" ");
    var titleCaseWords = words.map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return titleCaseWords.join(" ");
}

titleCase("I'm a little tea pot");