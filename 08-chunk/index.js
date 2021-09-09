// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
  if (arr.length === 0 || size === 0) {
    return [];
  } else {
    const resultArr = [];
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
      const smallArr = [];
      while(counter < size && i < arr.length) {
        smallArr.push(arr[i]);
        console.log(smallArr)
        counter++;
        i++;
      }
      i--;
      resultArr.push(smallArr);
      counter = 0;
    }
    return resultArr;
  }
};
