/**
 * Array
 */

// Array.from
console.log(Array.from('123abc'));	// ['1', '2', '3', 'a', 'b', 'c']

console.log(Array.from(123));	// []

console.log(Array.from(new Set([1,2,3,4,4])));	// [1, 2, 3, 4]

console.log(Array.from(new Map([[1,2], [3,4]])));	// [[1, 2], [3, 4]]

console.log(Array.from({length: 3}));	// [undefined, undefined, undefined]

console.log(Array.from(['a', 'b', 'c', 'd'], (val, index) => val + index));	// ['a0', 'b1', 'c2', 'd3']


// Array.isArray
console.log(Array.isArray([1, 2, 3]));	// true

function test () {
	console.log(Array.isArray(arguments));
}
console.log(test());	// false

// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype); 	// true

// iframe
var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
var arr = new xArray(1,2,3); // [1,2,3]

// Correctly checking for Array
Array.isArray(arr);  // true
// Considered harmful, because doesn't work though iframes
arr instanceof Array; // false