let user = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 28 },
  { name: "Mary", age: 32 },
  { name: "David", age: 22 },
  { name: "Sarah", age: 29 },
  { name: "Michael", age: 35 },
  { name: "Emily", age: 27 },
  { name: "Alex", age: 26 },
  { name: "Linda", age: 31 }
];
function sortArray(array) {
  array.sort((a, b) => {
    return a.age - b.age;
  });
}
sortArray(user);
console.log(user);