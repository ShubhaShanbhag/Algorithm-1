// create a function that takes array as index
//create for loop
//create two variable lowervalue[0]
//index of the value
// create second loop
// create an if statement
// loop> or <
// if it is less we have to swap the values
//return our array

const selectionSort = (arr) =>{
    for (let i =0 ; i <arr.length ; i++){
    let lowestValue = arr[i];
    let indexOfLowestValue = i ;

    for( let j=i ; j < arr.length; j++){
        if (arr[j]<lowestValue){
            lowestValue = arr[j];
            indexOfLowestValue = j ;

        }
    }
   let temp = arr[i];
   arr[i] = arr[indexOfLowestValue]
   arr[indexOfLowestValue] = temp;
}
return arr
}
let arr = [4,7,1,2,9,5]
console.log(selectionSort(arr));