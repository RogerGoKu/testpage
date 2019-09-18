
let num: number = 1;
let str: string = 'str';
let bool: boolean = false;
let arr: any[] = [];


function test<T> (list: T[]): T[] {
	let _arr: T[];
	for (let i in list) {
		_arr.push(list[i]);
	}
	return _arr
}


test([1, 2, 3]);