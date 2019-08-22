let wm = new WeakMap();

wm.set({}, 1);
wm.set(global, 2);
wm.set(function () {}, 3)
