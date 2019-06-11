define([], function() {
    'use strict';
    const Login=function(){
        this.init();
    }
    Login.prototype={
        constructor:Login,
        init(){
            this.btnClick();
        },
        btnClick(){
            let btn=document.querySelector("button");
            btn.onclick=()=>{
                let user=document.querySelector(".user").value;
                let pwd=document.querySelector(".pwd").value;
                var loca=JSON.parse(localStorage.getItem("U"));
                if(!loca){
                    //如果本地存储中这个数组为空的话直接跳转到注册页面
                    location.href='Registration.html'
                }else{
                    let flag=loca.some(item=>{
                        return item.user==user&&item.pwd==pwd;
                    });
                    if(flag){
                        alert("登陆成功")
                    }else{
                        alert('error');
                        location.href='Registration.html';
                    }
                }
            }
        }
    }
    return Login;
});