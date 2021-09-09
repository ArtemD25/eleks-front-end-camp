/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  } else if (numbers.length === 1) {
    return numbers[0];
  } else {
    let firstMaxNum = numbers[0], secondMaxNum = numbers[0];
    for (let num of numbers) {
      console.log(`1: ${firstMaxNum}, 2: ${secondMaxNum}`);
      if (num > firstMaxNum) {
        secondMaxNum = firstMaxNum;
        firstMaxNum = num;
      } else if (num > secondMaxNum) {
        secondMaxNum = num;
      }
    }
    return firstMaxNum + secondMaxNum;
  }
}
