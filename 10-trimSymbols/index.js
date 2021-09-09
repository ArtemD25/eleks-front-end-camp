/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number | undefined} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (arguments.length < 2) {
    return string;
  } else if (size === 0) {
    return '';
  } else if (string.length > 0) {
    return findDuplicateValues(string, size);
  }
  return string;
}

function findDuplicateValues(string, size) {
  let numOfChars = 0;
  let newString = '';
  for (let i = 0; i < string.length; i++) {

    if (i === 0 || (string[i - 1] === string[i] && numOfChars < size)) {
      numOfChars++;
      newString += string[i];
    } else if (string[i - 1] === string[i] && numOfChars >= size) {
      numOfChars++;
    } else if (string[i - 1] !== string[i]) {
      numOfChars = 1;
      newString += string[i];
    }

  }
  return newString;
}
