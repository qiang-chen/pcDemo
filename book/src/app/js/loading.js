define(['jquery'], function($) {
    'use strict';
    class Load{
        constructor(){
            this.init();
        }
        init(){
            this.scroll();
            this.event();
        }
        scroll(){
            const dl=document.querySelectorAll("dl");
           dl.forEach(item=>{
               if(item.getBoundingClientRect().top<document.documentElement.clientHeight/2){
                    let src=$(item).attr("data");
                    $(item).find("img").attr("src",`./app/img/${src}`);
               }
           });
        }
        event(){
            document.onscroll=()=>{
                this.scroll();
            }
        }
    }
    return Load;
});