define([], function() {
    'use strict';
    /**
     * @function[此函数的主要作用是点击地址跳转到到地址然后进行选择城市]
     */
    const Skip=function(){
        this.init();
    }
    Skip.prototype={
        constructor:Skip,
        init(){
            this.event()
        },
        event(){
            const skip=document.querySelector(".skip");
            skip.onclick=()=>{
                location.href='addr.html';
            }
        }
    }
    return Skip
});