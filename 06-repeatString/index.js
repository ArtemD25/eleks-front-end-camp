/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {
  if (str === '') {
    return '';
  } else {
    return chageStr(str);
  }
}

function chageStr(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += multChars(str[i], i + 1);
    if (i < str.length - 1) {
      newStr += '-';
    }
  }
  return newStr;
}

function multChars(char, num) {
  let manyChars = '';
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      manyChars += char.toUpperCase();
    } else {
      manyChars += char;
    }
  }
  return manyChars;
}
