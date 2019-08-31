
function *test1 () {
	yield 1;
	yield 'a'
	yield [123, 456]
	return 'end'
}

let it1 = test1();

console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());


function *test2 () {
	let val = yield setTimeout(() => {
		it2.next('time out')
	}, 2000);
	console.log(val);
}

let it2 = test2();

it2.next();