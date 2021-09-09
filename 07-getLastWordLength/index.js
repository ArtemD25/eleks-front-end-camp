export const getLastWordLength = str => {
  if (str.length === 0) {
    return 0;
  } else {
    str = str.trim();
    if (str.length === 0) {
      return 0;
    } else {
      str = str.split("").reverse().join("");
      console.log(str);
      if (str.match(/^.+?\s/)) {
        return str.match(/^.+?\s/)[0].length - 1;
      } else if (str.match(/^.+?$/)) {
        return str.match(/^.+?$/)[0].length;
      }
    }
  }
};
