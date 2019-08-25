// 1
function makeIterator (array) {
	let nextIndex = 0;
	
	return {
		next: function () {
			return nextIndex < array.length ?
				{ value: array[nextIndex++], done: false } : 
				{ value: undefined, done: true }
		}
	}
}

let it1 = makeIterator([1, 2, 3]);
it1.next();
it1.next();
it1.next();
it1.next();


// 2
let arr2 = [1, 2, 3];
let it2 = arr2[Symbol.iterator]();

it2.next();
it2.next();
it2.next();
it2.next();

// 3 
class RangeIterator {
	constructor(start, stop) {
		this.value = start;
		this.stop = stop;
	}
	
	[Symbol.iterator] () { return this }
	
	next () {
		let value = this.value;
		if (value < this.stop) {
			this.value++;
			return { value: undefined, done: false }
		}
		
		return { value: undefined, done: true }
	}
}

function range (start, stop) {
	return new RangeIterator(start, stop)
}

for (let val3 ofr range(0, 3)) {
	console.log(val3)
}

