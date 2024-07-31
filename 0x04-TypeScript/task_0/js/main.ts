interface Student {
    firstname: string,
    lastname: string,
    age: number,
    location: string
}

let st1: Student = {
    firstname: 'John',
    lastname: 'Doe',
    age: 24,
    location: 'morocco'
};
let st2: Student = {
    firstname: 'Jane',
    lastname: 'Smith',
    age: 23,
    location: 'morocco'
};

let studentsList: Student[] = [st1, st2];
