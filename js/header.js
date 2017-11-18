//nav随内容改变背景
var mainTitle = id$('main_title');
var navLis = mainTitle.getElementsByTagName('li');
(function () {
    for (var i = 0, len = navLis.length; i < len; i++) {
        navLis[i].onclick = function () {
            for (i = 0; i < len; i++) {
                navLis[i].className = navLis[i].className.replace('title_current', '');
            }
            this.className += ' title_current';
        }
    }
})();

