window.addEventListener('load', function () {
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;

    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
    })
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            arrow_r.click();
        }, 2000);//开启
    })

    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';

            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -index * focusWidth);
        })
        ol.children[0].className = 'current';
    }
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    /* 节流阀 */
    var flag = true;
    /* 右侧按钮点击事件 */

    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false;//关闭节流阀
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            circle++;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            if (circle == ol.children.length) {
                circle = 0;
            }
            circlenChange();
        }
    })
    /* 左侧按钮点击事件 */
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';

            }
            num--;
            circle--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            /* if (circle < 0) {
                circle = ol.children.length - 1;
            } */
            circle = circle < 0 ? ol.children.length - 1 : circle;
            circlenChange();
        }
    })
    function circlenChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    var timer = setInterval(function () {
        arrow_r.click();
    }, 2000);
})