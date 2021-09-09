/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  if (Object.keys(obj).length === 0) {
    return {};
  } else {
    const newObj = {};
    const keysArray = Object.keys(obj);
    for (let item of keysArray) {
      if (!fields.includes(item)) {
        newObj[item] = obj[item];
      }
    }
    return newObj;
  }
};
