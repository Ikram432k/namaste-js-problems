let arrVal = [7, 1, 5, 4, 3, 2];
function selectionSort(arr) {
    //run the itretion for n-1 times
    for (let i = 0; i < arr.length;i++){
        let min = i;
        //run the loop from i+1 compare the elements and move if the element is less than i
        for (let j = i + 1; j <= arr.length; j++){
            if (arr[min] > arr[j]) {
                console.log("in the 1st if",arr[j])
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}
console.log(selectionSort(arrVal));