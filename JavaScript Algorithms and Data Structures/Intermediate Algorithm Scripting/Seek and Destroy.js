function destroyer(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    const filteredArray = [];

    for (let i = 0; i < arr.length; i++) {
        let removeElement = false;
        for (let j = 0; j < valsToRemove.length; j++) {
            if (arr[i] === valsToRemove[j]) {
                removeElement = true;
            }
        }
        if (!removeElement) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

// Pig Latin
function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
        ? str
            .replace(consonantRegex, "")
            .concat(myConsonants)
            .concat("ay")
        : str.concat("way");
}

translatePigLatin("consonant");

// Search and Replace
function myReplace(str, before, after) {
    const strArr = str.split(" ");
    const [wordToReplace] = strArr.filter(item => item === before);
    const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase()
        ? after[0].toUpperCase() + after.slice(1)
        : after[0].toLowerCase() + after.slice(1);
    return strArr.map(item => (item === before ? replacement : item)).join(" ");
}

// test:
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");