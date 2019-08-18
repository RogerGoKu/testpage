/**
 * Object
 */

// Object.assign
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

// Object.create

// Object.defineProperties
// Object.defineProperty

// Object.entries
const object1 = {
  a: 'somestring',
  b: 42
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}