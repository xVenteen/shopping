window.addEventListener('load', function () {
    var inp = [...document.querySelectorAll('.inp')];
    var btn = document.querySelector('.btn');
    var pd = [...document.querySelectorAll('.pd')]
    var ruo = document.querySelector('.ruo')
    var zhong = document.querySelector('.zhong')
    var qiang = document.querySelector('.qiang');
    var num = document.querySelector('.num');
    var psw = document.querySelector('.psw');
    for (var i = 0; i < inp.length; i++) {
        inp[i].addEventListener('blur', function (e) {
            let el = e.target;
            if (el.value.length == 0 || el.value == '') {
                el.nextElementSibling.className = 'error';
                el.nextElementSibling.children[0].className = 'error_icon';
            }
            else {
                el.nextElementSibling.children[0].className = 'success_icon';
                btn.addEventListener('click', function () {
                    var valn = num.value;
                    var vals = psw.value;
                    console.log(vals);
                    localStorage.setItem('unum', valn);
                    localStorage.setItem('upsw', vals);
                })
            }
        })
    }
    for (var i = 0; i < pd.length; i++) {
        pd[i].style.visibility = 'hidden';
    }
    inp[2].addEventListener('blur', function () {
        for (var i = 0; i < pd.length; i++) {
            pd[i].style.visibility = 'hidden';
        }
        var psws = psw.value;
        if (psws.length < 6) {
            ruo.style.visibility = 'visible';
        } else if (psws.length < 8) {
            zhong.style.visibility = 'visible';
        } else {
            qiang.style.visibility = 'visible';
        }
    })
})