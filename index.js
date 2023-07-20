// Count Duplicate Elements in Array
const items = ['a', 'b', 'a', 'b', 'c', 'd', 'a', 'b', 'a', 'b', 'c', 'd', 'r'];
function countDuplicates(data) {
  const output = {};
  data.map((d) => {
    return (output[d] = (output[d] || 0) + 1);
  });
  return output;
}
console.log(countDuplicates(items));

//Write a generic function to add an array object in a json object
const addObjectToArray = (jsonObject, arrayKey, objectToAdd) => {
  if (!jsonObject.hasOwnProperty(arrayKey)) {
    jsonObject[arrayKey] = [];
  }
  jsonObject[arrayKey].push(objectToAdd);
};
const myJSON = {
  users: [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
  ],
};
const userToAdd = { name: 'Alice', age: 35 };
addObjectToArray(myJSON, 'users', userToAdd);
console.log(myJSON);

//Concept of Currying
function add(a) {
  return function (b) {
    return a + b;
  };
}
const add5 = add(5);
console.log(add5(3)); // Output: 8

//concept of bind
const obj = { name: 'John' };
function greet() {
  console.log(`Hello, ${this.name}!`);
}
const boundGreet = greet.bind(obj);
boundGreet(); // Output: Hello, John!

//example of call
const ob = { name: 'John' };
function greet() {
  console.log(`Hello, ${this.name}!`);
}
greet.call(ob); // Output: Hello, John!

//example of apply
const obje = { name: 'John' };
function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}
greet.apply(obje, ['Hello']); // Output: Hello, John!

//--------------------------------------------------------------

//Use of let
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// //Use of var
for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
//using Var how to achieve same op
for (var i = 1; i <= 5; i++) {
  (function (num) {
    setTimeout(() => {
      console.log(num);
    }, 1000);
  })(i);
}
