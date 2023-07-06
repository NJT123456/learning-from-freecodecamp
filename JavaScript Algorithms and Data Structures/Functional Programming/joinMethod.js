function sentensify(str) {
    // Only change code below this line
    return str.split(/\W/).join(" ")

    // Only change code above this line
}

sentensify("May-the-force-be-with-you");
console.log(sentensify("May-the-force-be-with-you"))

function urlSlug(title) {
    return title.toLowerCase().trim().split(/\s+/).join("-")

}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");