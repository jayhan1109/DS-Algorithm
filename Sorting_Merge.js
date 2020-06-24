function merge(arr1, arr2) {
  const arr1Length = arr1.length;
  const arr2Length = arr2.length;
  const res = [];

  let i = 0;
  let j = 0;

  while (true) {
    if (arr1[i] > arr2[j]) {
      res.push(arr2[j]);
      j++;
    } else if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr1[i]);
      res.push(arr2[j]);
      i++;
      j++;
    }

    if (i === arr1Length) {
      for (let k = j; k < arr2Length; k++) {
        res.push(arr2[k]);
      }
      return res;
    }

    if (j === arr2Length) {
      for (let k = i; k < arr1Length; k++) {
        res.push(arr1[k]);
      }
      return res;
    }
  }
  return res;
}

function mergeSort(arr) {
  if (arr.length === 0 || arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const arr1 = mergeSort(arr.slice(0, mid));
  const arr2 = mergeSort(arr.slice(mid, arr.length));
  return merge(arr1, arr2);
}

mergeSort([2, 5, 4, 6, 42, 9, 100, 21, 56, 56, 56]);
