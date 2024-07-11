let arr = [25, 36, 1, 45, 96, 31, 65];

function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let key = arr[i];
        let j = i-1;

        while(j >=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = key;
    }
}

insertionSort(arr);
console.log("Soerted Array :",arr);