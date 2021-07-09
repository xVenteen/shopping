window.addEventListener('load', function () {
    var num = document.querySelector('.num');
    var psw = document.querySelector('.psw');
    var btn = document.querySelector('.btn')
    console.log(localStorage.getItem('unum'));
    console.log(localStorage.getItem('upsw'));

    btn.addEventListener('click', function () {
        var valn = num.value;
        var valp = psw.value;

        if (valn == localStorage.getItem('unum') && valp == localStorage.getItem('upsw')) {
            location = './index.html';
        }
        else alert('错误');
    })
})

