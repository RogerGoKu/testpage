function test(list) {
    var _arr;
    for (var i in list) {
        _arr.push(list[i]);
    }
    return _arr;
}
test([1, 2, 3]);
