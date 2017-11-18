var goTop = document.getElementById('go_top');
//返回顶部背景鼠标移入加深移入出减淡
goTop.onmouseover = function () {
    this.style.opacity = 1;
};
goTop.onmouseout = function () {
    this.style.opacity = 0.4;
};

// 主内容随滚动条加载三次---后端注意更改加载内容
var flow = document.getElementById("mainCont").innerHTML;
var count = 0;

function addArt() {
    document.getElementById("mainCont").innerHTML += flow;
}

window.onscroll = function () {
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    var client = document.documentElement.clientHeight || document.body.clientHeight;
    var screen = document.documentElement.scrollHeight || document.body.scrollHeight;
    var screenW = document.documentElement.clientHeight || document.body.clientWidth;
    //显示隐藏返回顶部按钮
    if (scroll >= 100) {
        goTop.style.display = 'block';
    } else {
        goTop.style.display = '';
    }
    //瀑布流循环
    if (scroll + client === screen) {
        count++;
        if (count > 2 || screenW < 960) {
            count = 0;
            window.onscroll = null;
        } else {
            addArt();
        }
    }
};

//点击回滚至顶部
var id;
goTop.onclick = function () {
    var step = 100;
    var scroll = document.documentElement.scrollTop;
    id = setInterval(function () {
        if (scroll <= 0) {
            scroll = 0;
            clearInterval(id);
            document.documentElement.scrollTop = scroll;
            return;
        }
        scroll -= step;
        document.documentElement.scrollTop = scroll;
    }, 10);
};

// 刷新返回页面顶部
window.onbeforeunload = function () {
    // window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
};
