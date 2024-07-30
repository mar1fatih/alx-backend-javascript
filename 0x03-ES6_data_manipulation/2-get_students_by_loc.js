export default function getStudentsByLocation(arr, string) {
  if (!(arr instanceof Array)) return [];
  return arr.filter((item) => item.location === string);
}
