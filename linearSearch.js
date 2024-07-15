let arr = [25, 36, 1, 45, 95, 31, 27, 6, 95, 8, 50, 86, 26, 56];
let target_element = 56;
function LinearSearch(arr, target_element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target_element) {
      return i;
    }
  }
  return -1;
}

let result = LinearSearch(arr, target_element);
if (result !== -1) {
  console.log(`Element found at index ${result}`);
} else {
  console.log(`Element is not found `);
}
