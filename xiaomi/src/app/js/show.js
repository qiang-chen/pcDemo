define(['ajax'], function(ajax) {
    'use strict';
    const Show=function(){
        this.init();
    }
    Show.prototype={
        constructor:Show,
        init(){
            this.render()
        },
        render(){
            ajax({
                url:'./mask/data.json',
            }).then((res)=>{
                this.change(res,0);
                this.mouse(res);
            })
        },
        change(res,index){
            let box=document.querySelector(".logo-nav-select");
            let str=res[index].one.map(item=>{
                let title=item.title?`<span>${item.title}</span>`:"";
                return `<div class="logo-nav-select-one">
                <ul>
                    <li>${title}</li>
                    <li><img src="./app/images/${item.img}" alt=""></li>
                    <li></li>
                    <li>${item.name}</li>
                    <li>${item.price}起</li>
                </ul>
            </div>`
            }).join("");
            box.innerHTML=str;
        },
        mouse(res){
            //鼠标划过导航让下方子菜单显示
            let nav=document.querySelector(".logo-nav");
            let navChild=document.querySelector(".logo-nav-select");
            nav.onmouseover=()=>{
                navChild.style.height="306px"
            };
            nav.onmouseout=()=>{
                navChild.style.height="0"
            }
            //遍历上方所有的按钮划过的时候进行切换数据
            let navLi=document.querySelectorAll(".list li");
            navLi.forEach((item,index)=>{
                item.onmouseover=()=>{
                    if(index<8){
                        this.change(res,index);
                    }
                }
            })
        }
    }
    return Show;
});