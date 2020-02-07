function customReverse(arr) {
  let midIndex = (0 + (arr.length - 1)) / 2;
  for (let i = 0; i < arr.length; i++) {
    if (i === midIndex) break;
    if (i === midIndex - 0.5) {
      let firstMidIndex = midIndex - 0.5;
      let lastMidIndex = midIndex + 0.5;
      let tempMidIndex = arr[firstMidIndex];
      arr[firstMidIndex] = arr[lastMidIndex];
      arr[lastMidIndex] = tempMidIndex;
      break;
    }
    let lastIndex = arr.length - (i + 1);
    let temp = arr[i];
    arr[i] = arr[lastIndex];
    arr[lastIndex] = temp;
  }
}

let arr = ["v", "i", "s", "h", "a", "l"];
customReverse(arr);
console.log(arr);
