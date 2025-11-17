let arr = [1,2,3,4];

function bubbleSort(val) {
    for (let i = 0; i < val.length-1; i++){
        let isSwapped = false;

        for (let j = 0; j < val.length - i - 1; j++){
            if (val[j] > val[j + 1]) {
                let removedele = val[j];
                val.splice(j, 1);
                val.splice(j + 1, 0, removedele);
                isSwapped = true;
            }
        }
                    if (!isSwapped) { console.log("breal is called",); break}
    }
    return val;
}
console.log(bubbleSort(arr));