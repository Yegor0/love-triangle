/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let array = preferences;
  let count = 0;
  for(let i = 0; i < array.length; i++) {
    let spich = array[i] - 1;
    if (spich != i) {
      if(spich + 1 != array[spich]) {
        spich = array[spich] - 1;
        if(array[spich] - 1 == i) {
          count++;
          spich = - 1;
        }
      }
    }
  }
  return count / 3;
};
