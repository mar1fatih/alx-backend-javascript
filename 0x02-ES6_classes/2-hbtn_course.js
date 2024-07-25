const assert = require('assert');

export default class HolbertonCourse {
  constructor(name, length, students) {
    assert(typeof (name) === 'string', TypeError('Name must be a string'));
    assert(typeof (length) === 'number', TypeError('Length must be a number'));
    assert(typeof (students) === 'object', TypeError('Students must be an object'));
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    assert(typeof (name) === 'string', TypeError('Name must be a string'));
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    assert(typeof (length) === 'number', TypeError('Length must be a number'));
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    assert(typeof (students) === 'object', TypeError('Students must be an object'));
    this._students = students;
  }
}
