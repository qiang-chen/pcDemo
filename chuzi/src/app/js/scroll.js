define([], function() {
    'use strict';
    /**
     * @function[此函数是做导航条的吸顶效果]
     */
    const scroll=function(){
        this.nav=document.querySelector(".nav");
        console.log(this.nav)
        this.init()
    }
    scroll.prototype={
        constructor:scroll,
        init(){
            document.onscroll=()=>{
                let navT=this.nav.getBoundingClientRect().top;
                let t=document.documentElement.scrollTop;
                if(t>navT){
                    this.nav.classList.add('fixed');
                }else{
                    this.nav.classList.remove('fixed')
                }
            }
        }
    }
    return scroll;
});