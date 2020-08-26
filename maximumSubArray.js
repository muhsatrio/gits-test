const findMaximumSubArrayNumOne = (inputedArray) => {
    let leftIndex = 0, maxNumber = 0;
    const arraySize = inputedArray.length;
    while (leftIndex<arraySize) {
        if (inputedArray[leftIndex]===1) {
            let lengthOne = 0, lastIndex = leftIndex;
            for (let rightIndex=leftIndex;rightIndex<inputedArray.length;rightIndex++) {
                lastIndex = rightIndex;
                if (inputedArray[rightIndex]===1) {
                    lengthOne++;
                }
                else {
                    break;
                }
            }
            leftIndex = lastIndex;
            if (lastIndex===arraySize-1) {
                leftIndex++;
            }
            if (lengthOne>maxNumber) {
                maxNumber = lengthOne;
            }
        }
        else {
            leftIndex++;
        }
    }
    return maxNumber;
}

// Choose one of these inputs

// const inputedArray = [1, 1, 0, 1, 1];
const inputedArray = [1, 0, 0, 1, 0, 1, 1];

console.log(findMaximumSubArrayNumOne(inputedArray));