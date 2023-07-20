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
addObjectToArrayInJSON(myJSON, 'users', userToAdd);
console.log(myJSON);
