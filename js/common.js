function setText(e, str) {
    if (typeof e.innerText !== 'string') {
        e.textContent = str;
    } else {
        e.innerText = str;
    }
}

function getText(e) {
    if (typeof e.innerText !== 'string') {
        return e.textContent;
    } else {
        return e.innerText;
    }
}

//封装通过id获取元素的方法
function id$(id) {
    return document.getElementById(id);
}

//封装通过tagname获取元素的方法
function tag$(tag) {
    return document.getElementsByTagName(tag);
}

//获取min - max 之间的随机数
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//getFirstElementChild 封装元素第一子元素
function getFirstElementChild(farEle) {
    var cNods = farEle.childNodes;
    for (var i = 0, len = cNods.length; i < len; i++) {
        if (cNods[i].nodeType === 1) {
            return cNods[i];
        }
    }
    return null;
}

//getLastElementChild 封装元素最后一个子元素
function getLastElementChild(farEle) {
    var cNods = farEle.childNodes;
    for (var i = cNods.length - 1; i > 0; i--) {
        if (cNods[i].nodeType === 1) {
            return cNods[i];
        }
    }
    return null;
}

//封装 nextElementSibling
function getNextElementSibling(nNode) {
    while (nNode) {
        nNode = nNode.nextSibling;
        if (nNode.nodeType === 1) {
            return nNode;
        }
    }
}

//封装 previousElementSibling
function getPreviousElementSibling(nNode) {
    while (nNode) {
        nNode = nNode.previousSibling;
        if (nNode.nodeType === 1) {
            return nNode;
        }
    }
}

//封装窗口滚动
function getScroll() {
    return {
        scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
        scrollLeft: document.documentElement.scrollLeft || document.body.scrollLeft,
        clientHeight: document.documentElement.clientHeight || document.body.scrollHeight,
        htmlHeight: document.documentElement.scrollHeight || document.body.scrollHeight
    }
}

// 所有输入框背景获取焦点变背景色
(function () {
    var inputLis = tag$('input');
    for (var i = 0, len = inputLis.length; i < len; i++) {
        inputLis[i].onfocus = function () {
            this.style.backgroundColor = '#f0f0f0';
        };
        inputLis[i].onblur = function () {
            this.style.backgroundColor = '#ffffff';
        }
    }
})();



// 标签鼠标覆盖切换
(function () {
    var that;
    var heads;
    var mains;
    function Tag(options) {
        options = options || {};
        this.container = options.container || '.box';
        this.menuSelected = options.menuSelected || 'current';
        this.mainSelected = options.mainSelected || 'current';
        that = this;
        init();
    }

    function init() {
        var container = document.querySelector(that.container);
        var head = container.children[0];
        var main = container.children[1];
        heads = head.children;
        mains = main.children;
        for (var i = 0, len = heads.length; i < len; i++) {
            heads[i].index = i;
            heads[i].onmouseover = tabChange;
        }
    }

    function tabChange() {
        for (var i = 0, len = heads.length; i < len; i++) {
            heads[i].className = heads[i].className.replace(that.menuSelected, '');
            mains[i].className = mains[i].className.replace(that.mainSelected, '');
        }
        this.className = this.className + ' ' + that.menuSelected;
        mains[this.index].className = mains[this.index].className + ' ' + that.mainSelected;
    }

    window.Tag = Tag;
})();
//=======================================================================
