/**
 * @function[点击登录函数]
 * @param{参数解释}
 */
define([], function() {
    'use strict';
    const Enter=function(){
        this.init();
    }
    Enter.prototype={
        constructor:Enter,
        init(){
            this.click()
        },
        click(){
            let btn=document.querySelector(".enter");
            btn.onclick=()=>{
                location.href=`index.html`
            }
        }
    }
    return Enter;
});