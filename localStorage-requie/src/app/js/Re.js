define([], function() {
    'use strict';
    const Regis=function(){
        if(localStorage.U){
            this.arr=JSON.parse(localStorage.U);
        }else{
            this.arr=[];
        }
        this.init();
    };
    Regis.prototype={
        constructor:Regis,
        init(){
            this.clickBtn();
        },
        clickBtn(){
            let btn=document.querySelector("button");
            console.log(this.arr)
            btn.onclick=()=>{
                let user=document.querySelector(".user").value;
                let pwd=document.querySelector(".pwd").value;
                let opj={
                    user:user,
                    pwd:pwd
                };
                let flag=this.arr.some(item=>{
                    return item.user==user&&item.pwd==pwd;
                });
                if(flag){
                    alert('该用户已经被注册');
                }else{
                    this.arr.push(opj);
                localStorage.setItem("U",JSON.stringify(this.arr));
                    alert("注册成功")
                }
            }
        }
    }
    return Regis;
});