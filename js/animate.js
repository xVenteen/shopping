//简单动画函数封装 obj目标对象 target目标位置
function animate(obj, target, callback) {
    //不断点击按钮的时候会开启许多计时器，使其越走越快
    //解决方案是保证只有一个定时器


    clearInterval(obj.timer);//清除以前定时器
    obj.timer = setInterval(function () {
        //Math.ceil()  “向上取整”， 即小数部分直接舍去，并向正数部分进1
        var step = (target - obj.offsetLeft) / 10;//缓动动画：把每次位移减小
        step = step > 0 ? Math.ceil(step) : Math.floor(step);//Math.floor向下取整
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);//停止定时器 

            /* if (callback) {
                callback();
            } 与下面等效*/
            callback && callback();
        }

        //offsetLeft获取元素相对于父元素距离左边的位置
        //父盒子必须有定位
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}