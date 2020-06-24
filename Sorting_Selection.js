function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    let tmp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = tmp;
  }

  return arr;
}

selectionSort([34, 22, 10, 19, 17]);
