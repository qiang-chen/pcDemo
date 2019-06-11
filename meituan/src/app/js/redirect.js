define(['jquery'], function($) {
    'use strict';
    /**
     * @function[此函数是做城市页面各种点击都能跳转到主页面]
     */
    const Redirect=function(){
        if(localStorage.a){
            this.arr=JSON.parse(localStorage.a)
        }else{
            this.arr=[];
        }
        
        this.init();
    }
    Redirect.prototype={
        constructor:Redirect,
        init(){
            this.hotRender();
            this.event();
        },
        event(){
            //下方所有城市的点击事件
            //console.log($(".main-count a"))
            $(".main-count").get(0).onclick=(ev)=>{
                let e=ev||window.event;
                let target=e.target||e.srcElement;
                if(target.tagName=="A"){
                    this.arr.push(target.innerText);
                    localStorage.a=JSON.stringify(this.arr);
                    this.hotRender();
                    localStorage.setItem("city",target.innerText);
                    //跳转
                    let load=`<img src="./app/img/load.gif" alt="">`;
                    $(".load").append(load);
                     setTimeout(function(){
                         $(".load").find("img").remove();
                         location.href='index.html';
                     },1500)
                }
            }
            //给搜索框的下拉菜单添加点击事件
            $(".search-select").get(0).onclick=(ev)=>{
                let e=ev||window.event;
                let target=e.target||e.srcElement;
                if(target.tagName=="A"&&target.innerText!="未找到匹配项"){
                    this.arr.push(target.innerText);
                    localStorage.a=JSON.stringify(this.arr)
                    this.hotRender();
                    localStorage.setItem("city",target.innerText);
                    //跳转
                    let load=`<img src="./app/img/load.gif" alt="">`;
                    $(".load").append(load);
                     setTimeout(function(){
                         $(".load").find("img").remove();
                         location.href='index.html';
                     },1500)
                }
            }
            //给三级联动下拉框添加事件
            $(".city").get(0).onchange=()=>{
                let a=$(".city").get(0).children;
                for(let i=0;i<a.length;i++){
                    if(a[i].selected==true){
                        this.arr.push(a[i].innerText);
                        localStorage.a=JSON.stringify(this.arr)
                        this.hotRender()
                        localStorage.setItem("city",a[i].innerText);
                        //跳转
                        let load=`<img src="./app/img/load.gif" alt="">`;
                       $(".load").append(load);
                        setTimeout(function(){
                            $(".load").find("img").remove();
                            location.href='index.html';
                        },1500)
                    }
                }
            }
        },
        hotRender(){
            let str="";
            this.arr=Array.from(new Set(this.arr));
            console.log(this.arr)
            str+=this.arr.map(item=>{
                return `<a href="#1">${item}</a>`
            }).join("");
            $(".a").html(str);
        }
    }
    return Redirect
});