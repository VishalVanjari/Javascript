let arr = [25, 36, 1, 45, 96, 31, 65];

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let index = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    let temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;
  }
}

selectionSort(arr);
console.log(arr);
