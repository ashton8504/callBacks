/*******************************************************************************
Write a function `myForEach` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in the
element, index, and array itself. The function does not need to return any value.

Do not use the built in Array#forEach.

Examples:

myForEach(['a', 'b', 'c'], function (el, i) {
    console.log(el + ' is at index ' + i);
}); // prints
// a is at index 0
// b is at index 1
// c is at index 2

let test = [];
myForEach(['laika', 'belka'], function (el) {
    test.push(el.toUpperCase());
});
console.log(test); // ['LAIKA', 'BELKA']
*******************************************************************************/

function myForEach(arr, cb) {
  // Your code here
  let result = []

  for (let i = 0; i < arr.length; i++){
      result.push(cb(arr[i], i))
    }

  return result
}

let test = []

myForEach(['laika', 'belka'], function (el) {
  test.push(el.toUpperCase());
});
console.log(test); // ['LAIKA', 'BELKA']

myForEach(['a', 'b', 'c'], function (el, i) {
  console.log(el + ' is at index ' + i);
}); // prints
// a is at index 0
// b is at index 1
// c is at index 2



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myForEach;
