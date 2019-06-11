define([], function() {
    'use strict';
    /**
     * @function[此函数是划过左边菜单然后右边出来二级菜单]
     */
    const Show=function(){
        this.init()
    }
    Show.prototype={
        constructor:Show,
        init(){
            this.show()
        },
        show(){
            const main_left=document.querySelector(".main-left");
            const nav_right=document.querySelector(".nav-right");
            main_left.onmouseover=()=>{
                nav_right.style.display="block"
            }
            main_left.onmouseout=()=>{
                nav_right.style.display="none"
            }
        }
    }
    return Show;
});