/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  if (Object.keys(obj).length === 0) {
    return {};
  } else {
    let newObj = {};
    for (let item of fields) {
      if (obj[item] !== 'undefined') {
        newObj[item] = obj[item];
      }
    }
    return newObj;
  }
};
