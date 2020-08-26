let convertedString = [];

const recursiveFunc = (inputedArray, i) => {
    if (i<inputedArray.length-1) {
        recursiveFunc(inputedArray, i+1);
    }
    convertedString = [...convertedString, inputedArray[i]];
}

const reverseString = (inputedArray) => {
    recursiveFunc(inputedArray, 0);
}

const inputedArray = ["h", "e", "l", "l", "o"];
reverseString(inputedArray);
console.log(convertedString);