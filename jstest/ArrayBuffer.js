
let buffer = new ArrayBuffer(8);

console.log(buffer.byteLength);

let view = new Int32Array(buffer);

console.log(view)