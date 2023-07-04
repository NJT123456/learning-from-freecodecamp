// function confirmEnding(str, target) {
//     return str.endsWith(target);
//   }

function confirmEnding(str, target) {
    var targetLength = target.length;
    var strEnd = str.substring(str.length - targetLength);
    return strEnd === target;
}

confirmEnding("Bastian", "n");