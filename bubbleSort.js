let arr = [25, 36, 1, 45, 96, 31, 65];

function bubbleSort(arr) {
  let n = arr.length;
  let temp = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

bubbleSort(arr);
console.log("Sorted array : ",arr);
