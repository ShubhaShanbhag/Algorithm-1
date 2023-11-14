// create a function that takes  an array as input
// initialize a variable that holds length of an array
//create a for loop it will iterate through each element in the array
// create a second array it will compare the elements
// create an if statement
// return the result
// call the function

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};
inputArr = [3,1,5,4,9,6,2]
console.log(bubbleSort(inputArr));