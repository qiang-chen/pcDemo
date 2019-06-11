var user = document.querySelector(".user");
var pwd = document.querySelector(".pwd");
var btn = document.querySelector(".btn");
//声明一个数组把所有的本地存储信息以[{},{},{}]以这种形式存到本地存储localStorage中去
user.onchange = function () {
    //用户名验证
    var userValue = this.value;
    var reg = /^\w{1,6}$/;
    if (!reg.test(userValue)) {
        this.nextElementSibling.style.display = "block"
    } else {
        this.nextElementSibling.style.display = "none";
    }
}
pwd.onchange = function () {
    //密码验证
    //包含大写字母、小写字母、数字、特殊符号（不是字母，数字，下划线，汉字的字符）的8位以上组合
    var pwdValue = this.value;
    var reg = /^\w{1,6}$/
    if (!reg.test(pwdValue)) {
        this.nextElementSibling.style.display = "block"
    } else {
        this.nextElementSibling.style.display = "none";
    }
}

//点击按钮做跳转页面
var data = localStorage.a;
var isHad = false; //定义一个开关变量
var index = 0; //定义一个下标确定用户
if (data) {
    var arr = JSON.parse(localStorage.a)
} else {
    var arr = [];
}
btn.onclick = function () {
    //先获取上方内容
    var userValue = user.value;
    var pwdValue = pwd.value;
    for (var i = 0; i < arr.length; i++) {
        if (userValue == arr[i].user) {
            isHad = true;
            index = i;
        }
    }
    if(isHad){
        location.href='index-2.html';
    }else{
        var b=confirm("您输入的用户不存在,请去注册账号");
        if(b){
            location.href=`index-3.html`;
        }
    }
}