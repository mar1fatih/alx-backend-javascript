const fs = require('fs');

let count;
let parse = [];
const cs = [];
const swe = [];
let data;

const countStudents = (path) => {
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  if (data) {
    count = data.split('\n');
    for (const field of count) {
      parse = field.split(',');
      if (parse[0] !== 'firstname') {
        if (parse[3] === 'CS') {
          cs.push(parse[0]);
        } else if (parse[3] === 'SWE') {
          swe.push(parse[0]);
        }
      }
    }
    console.log(`Number of students: ${cs.length + swe.length}`);
    console.log(`Number of students in CS: ${cs.length} List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length} List: ${swe.join(', ')}`);
  }
};

module.exports = countStudents;
