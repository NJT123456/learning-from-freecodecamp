function chunkArrayInGroups(arr, size) {
    var result = [];
    var index = 0;

    while (index < arr.length) {
        result.push(arr.slice(index, index + size));
        index += size;
    }

    return result;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);