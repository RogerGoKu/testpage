var Element = require('./element');
var _ = require('./util');
var compare = require('./compare');
var patch = require('./patch');
var Observer = require('./Observer');


function getElements (tree) {
    var _children = [];
    var tree_children = tree.children || [];
    for (var i in tree_children) {
        var childEl = _.isObject(tree_children[i]) ? getElements(tree_children[i]) : tree_children[i];
        _children.push(childEl);
    }

    var _dom = new Element(tree.tagName, tree.props, _children);
    return _dom
}


function Vdom (tree) {
    this.$vdom = getElements(tree);
    this.$vdom_render = this.$vdom.render();
    this.$data = tree;
}

Vdom.prototype = {
    binder: function (container) {
        var THIS = this;

        Observer.prototype.updateFunc = function () {
            THIS.update();
        };

        THIS.ob = new Observer(THIS.$data);
    },
    update: function (newtree) {
        var THIS = this;
        if (newtree) THIS.$data = newtree;

        var newVdom = getElements(THIS.$data);
        //var new_render = newVdom.render();
        var diffs = compare(THIS.$vdom, newVdom);

        
        //THIS.$vdom_render = new_render;
        THIS.$vdom = newVdom;
        patch(THIS.$vdom_render, diffs);
    },
    init: function (container) {
        var THIS = this;
        var tree = THIS.$data;

        container.appendChild(THIS.$vdom_render);
        //THIS.binder(container);
        THIS.$data = tree;
    }
}


module.exports = Vdom;