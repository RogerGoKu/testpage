/*
* 创建虚拟节点
*/


function Element (tagName, props, children) {
    this.tagName = tagName;
    this.props = props;
    this.children = children;
    this.key = props
    ? props.key
    : void 666
}

Element.prototype.render = function () {
    //console.log(this.tagName)
    var el = document.createElement(this.tagName);
    var props = this.props;

    // 设置属性
    for (var propName in props) {
        var propValue = props[propName];

        //if (propName === 'value') el.value = props[propName];
         el.setAttribute(propName, propValue);
    }

    // 遍历子节点
    var children = this.children || [];
    children.forEach(function (child) {
        var childEl = (child instanceof Element) ?
            child.render()
            : document.createTextNode(child);

        el.appendChild(childEl)
    });

    return el
}

module.exports = function (tagName, props, children) {
    return new Element(tagName, props, children);
}