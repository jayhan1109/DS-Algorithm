function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (j = 0; j < i; j++) {
      if (arr[i - j - 1] > arr[i - j]) {
        let tmp = arr[i - j - 1];
        arr[i - j - 1] = arr[i - j];
        arr[i - j] = tmp;
      } else {
        break;
      }
    }
    console.log(arr);
  }

  return arr;
}
insertionSort([2, 1, 9, 76, 4]);
