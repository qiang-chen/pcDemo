var user = document.querySelector(".user");
var pwd = document.querySelector(".pwd");
var btn = document.querySelector(".btn");
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
if (data) {
    var arr = JSON.parse(localStorage.a)
} else {
    var arr = [];
}
btn.onclick = function () {
    var userValue = user.value;
    var pwdValue = pwd.value;
    //先判断在用户名和密码都符合格式的情况下在把用户名和密码都放进去
    var reg1 = /^\w{1,6}$/;
    var reg2 = /^\w{1,6}$/;
    if (reg2.test(pwdValue) && reg1.test(userValue)) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].user == userValue) {
                alert("该用户名已经被注册");
                return;
            }
        }
        //创建一个对象往本地存储中放
        var obj = {
            user: userValue,
            pwd: pwdValue
        };
        arr.push(obj);
        localStorage.setItem("a", JSON.stringify(arr));
        var b=confirm("用户注册成功");
        if(b){
            location.href='index.html'
        }
        user.value = "";
        pwd.value = "";
    }
}