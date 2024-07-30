export default function getStudentIdsSum(arr) {
  if (!(arr instanceof Array)) return [];
  const newarray = arr.map((item) => item.id);
  return newarray.reduce((accu, item) => accu + item, 0);
}
