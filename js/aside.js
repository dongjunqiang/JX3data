//右边栏e热门文章切换
var hotBody = id$('hot_body');//热门文章页面
var hotTag = id$('hot_tag');//热门文章标签
var sonBox = hotBody.getElementsByClassName('son_box');
var hotLis = hotTag.getElementsByTagName('li');
(function () {
    for (var i = 0, len = hotLis.length; i < len; i++) {
        hotLis[i].index = i;
        hotLis[i].onmouseover = function () {
            for (i = 0; i < len; i++) {
                hotLis[i].className = '';
                sonBox[i].className = sonBox[i].className.replace('hot_current', '');
            }
            this.className = 'hot_current';
            sonBox[this.index].className += ' hot_current';
        }
    }
})();
//登陆注册切换
var userBox = id$('user_lsbox');//登录注册界面
var userLtag = id$('userl_tag');//登录注册标签
var userLbox = userBox.getElementsByClassName('user_lbox');
var userLlis = userLtag.getElementsByTagName('li');
(function () {
    for (var i = 0, len = userLlis.length; i < len; i++) {
        userLlis[i].index = i;
        userLlis[i].onmouseover = function () {
            for (i = 0; i < len; i++) {
                userLlis[i].className = '';
                userLbox[i].className = userLbox[i].className.replace('ul_current', '');
            }
            this.className = 'ul_current';
            userLbox[this.index].className += ' ul_current';
        }
    }
})();