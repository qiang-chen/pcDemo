define(['creatMock'], function(creatMock) {
    'use strict';
    const Select=function(){
        this.init();
    }
    Select.prototype={
        constructor:Select,
        init(){
            this.render();
            this.event();
            this.add();
        },
        render(){
            let arr=creatMock;
            let str=arr.map(item=>{
                return `<p><span>${item.csentence}</span><a>约有${item.number}件</a></p>`
            }).join("");
            let box=document.querySelector(".logo-right-search");
            box.innerHTML=str;
        },
        event(){
            let tet=document.querySelector(".tet");
            let biao=document.querySelector(".biaoqian")
            let clone=document.querySelector(".biaoqian").cloneNode(true);
            let search=document.querySelector(".logo-right-search");
            tet.onfocus=function(){
                let parent=this.parentNode;
                //console.log(parent,biao)
                console.log(parent.lastElementChild.classList.contains("biaoqian"));
                if(parent.lastElementChild.classList.contains("biaoqian")){
                    parent.removeChild(parent.lastElementChild);
                }
                search.style.display="block";
            }
            // tet.onblur=function(){
            //     let parent=this.parentNode;
            //     //console.log(parent)
            //     search.style.display="none";
            //     parent.appendChild(clone);
            // }
            document.onclick=function(ev){
                let e=ev||event;
                let target=e.target||e.srcElement;
                e.preventDefault();
                if(target.tagName!="INPUT"){
                    search.style.display="none";
                    tet.parentNode.appendChild(clone)
                }
            }
        },
        add(){
            //给下拉菜单添加事件委托 点击的时候赋值给上方盒子
            let search=document.querySelector(".logo-right-search");
            let biao=document.querySelector(".biaoqian");
            search.onclick=function(e){
                let ev=e||window.event;
                let target=ev.target||ev.srcElement;
                let tet=document.querySelector(".tet");
                console.log(target.tagName)
                if(target.tagName=="P"){
                    console.log(target.firstElementChild)
                    tet.value=target.firstElementChild.innerHTML;
                }else if(target.tagName=="SPAN"){
                    tet.value=target.innerHTML;
                    //biao.parentNode.removeChild(biao);
                }
            }
        }
    }
    return Select;
});