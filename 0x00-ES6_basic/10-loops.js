export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  // eslint-disable-next-line
    for (let idx of array) {
    // eslint-disable-next-line
        arr.push(`${appendString}${idx}`);
  }
  return arr;
}
