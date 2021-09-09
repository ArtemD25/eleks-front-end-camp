/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {
  if (numbers.length === 0) {
    return '';
  } else {
    const numsArr = numbers.split(' ');
    let minNum = numsArr[0], maxNum = numsArr[0];
    for (let item of numsArr) {
      if (+item < +minNum) {
        minNum = item;
      }
      if (+item > +maxNum) {
        maxNum = item;
      }
    }
    return `${minNum} ${maxNum}`;
  }
}
