export const sameParityFilter = (arr = []) => {
  if (arr.length === 0) {
    return [];
  } else {
    return filterArray(arr);
  }
}

function filterArray(arr) {
  let newArr = arr.filter((item, i, array) => {
    return Math.abs(item) % 2 === Math.abs(array[0]) % 2;
  })

  return newArr;
}
