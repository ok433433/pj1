
window.addEventListener('load', function () {
    var elAccount = document.querySelector('[name=account]');
    var elPassword = document.querySelector('[name=pwd]');
    var elRemember = document.querySelector('#ckRm');


    // 登录按钮点击事件
    document.querySelector('.login').addEventListener('click', function () {
        var loginData = {};
        loginData.account = elAccount.value;
        loginData.pwd = elPassword.value;
        loginData.isRemember = elRemember.checked;
        
        // $.ajax({
        //     url: '/api/login',  // 接口地址
        //     data: loginData,
        //     type: 'POST',
        //     dataType: 'JSON'
        // }).then(function(res) {
        //     // 成功
        // }).fail(function(error) {
        //     // 失败
        // })
    });


    // 选中状态点击事件
    document.querySelector('#ckRm').addEventListener('click', function() {
        if(elRemember.checked) {
            document.querySelector('label .iconfont').className = 'iconfont icon-check';
        } else {
             document.querySelector('label .iconfont').className = 'iconfont icon-check1';
        }
    });

});