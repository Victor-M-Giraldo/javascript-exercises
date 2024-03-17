const removeFromArray = function(array, ...args) {
    for (let index = 0; index < array.length; index++) {
        if (args.includes(array[index])) {
            array.splice(index, 1);
            index--;
        }
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
