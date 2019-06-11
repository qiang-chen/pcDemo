define(['ajax','utils'], function(ajax,utils) {
    'use strict';
    const Verification=function(){
        this.init();
    }
    Verification.prototype={
        constructor:Verification,
        init(){
            this.click();
        },
        click(){
            let btn=document.querySelector("button");
            btn.onclick=()=>{
                //点击按钮的时候调用ajax 通过接口传给后台与数据库的数据进行比较然后接受后台比较成功后的数据
                let user=document.querySelector(".user").value;
                let pwd=document.querySelector(".pwd").value;
                //console.log(user,pwd,"------------")
                if(user&&pwd){
                    //console.log(utils)
                    ajax({
                        url:'/api/login',
                        data:{
                            user:user,
                            pwd:pwd
                        },
                        type:"post"
                    }).then(function(re){
                        if(re.code==0){
                            alert("登录成功")
                        }
                    })
                }
            }
        }
    }
    return Verification
});