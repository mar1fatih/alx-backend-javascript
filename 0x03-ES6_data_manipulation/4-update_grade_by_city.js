export default function updateStudentGradeByCity(arr, city, newGrades) {
  if (!(arr instanceof Array)) return [];
  const newarray = arr.filter((std) => std.location === city);
  newarray.map((fstd) => {
    // eslint-disable-next-line
    fstd.grade = 'N/A';
    newGrades.map((grades) => {
      if (grades.studentId === fstd.id) {
        // eslint-disable-next-line
        fstd.grade = grades.grade;
      }
      return null;
    });
    return fstd;
  });
  return newarray;
}
