let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let target_element = 80;
function BinarySearch(arr, target_element) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target_element) {
      return mid;
    } else if (arr[mid] < target_element) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

let result = BinarySearch(arr, target_element);
if (result !== -1) {
  console.log(`Element found at index ${result}`);
} else {
  console.log(`Element is not found`);
}
