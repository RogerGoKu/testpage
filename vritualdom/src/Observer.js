/*
* 观察者
*/
var _ = require('./util');

function observer (data) {
    if (!_.isObject(data)) {
        return false;
    }
    return new Observer(data);
}

var Observer = function (data) {
    this.data = data;
    this.transfrom(data);
}

Observer.prototype.transfrom = function (data) {
    for (var i in data) {
        this.defineReactive(data, i, data[i]);
    }
};

Observer.prototype.defineReactive = function (data, key, value) {
    var THIS = this;
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: false,
        get: function () {

            return value;
        },
        set: function (newVal) {
            if (newVal == value) return;

            value = newVal;
            observer(newVal);
            if (THIS.updateFunc) {
                return THIS.updateFunc();
            }
        }
    });

    observer(value);
};

module.exports = Observer;