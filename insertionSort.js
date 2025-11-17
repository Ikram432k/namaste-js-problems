let arrVal = [7, 1, 5, 4, 3, 2];
function insertionSort(arr) {
    //run the iteration from the 1st index of the array
    for (let i = 1; i < arr.length; i++){
        let curVal = arr[i];
        let prevIndex = i - 1;
        //check and update the prev value and index based on the current value
        while (arr[prevIndex] > curVal && prevIndex >= 0) {
            arr[prevIndex + 1] = arr[prevIndex];
            prevIndex--
        }
        arr[prevIndex+1] = curVal
    }
    return arr
}
console.log(insertionSort(arrVal));