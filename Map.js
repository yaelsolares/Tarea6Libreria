const students = [
  { name: "Pepe", age: 21 },
  { name: "Susana", age: 24},
  { name: "Casimiro", age: 22},
  { name: "Samuel", age: 23},
  { name: "Rogelio", age: 21}
]

let nameOfstudents = [];

for (let i = 0; i < students.length; i++) {
  nameOfstudents.push(students[i].name);
}

console.log(nameOfstudents);