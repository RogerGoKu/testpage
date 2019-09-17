

function test<T> (list: T[]): T[] {
	let _arr: T[];
	for (let i in list) {
		_arr.push(list[i]);
	}
	return _arr
}


test([1, 2, 3]);