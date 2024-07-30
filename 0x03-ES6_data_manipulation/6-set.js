export default function setFromArray(arr) {
  const set = new Set();
  // eslint-disable-next-line
  arr.map(val => set.add(val));
  return set;
}
