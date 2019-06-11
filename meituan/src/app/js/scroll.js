define([], function() {
    'use strict';
    /**
     * @function[此函数是点击上方字母下方自动往上滚动]
     */
    const scroll=function(){
        this.init()
    }
    scroll.prototype={
        constructor:scroll,
        init(){
            this.event()
        },
        event(){
            const main_title=document.querySelector(".main-title");
            const box=document.querySelectorAll(".main-list");
            main_title.onclick=(ev)=>{
                let e=ev||window.event;
                let target=e.target||e.srcElement;
                if(target.tagName=="A"){
                    for(let i=0;i<main_title.children.length;i++){
                        if(target==main_title.children[i]){
                            //console.log(55)
                            let t=box[i-1].getBoundingClientRect().top;
                            document.documentElement.scrollTop=t;
                        }
                    }
                }
            }
        }
    }
    return scroll;
});