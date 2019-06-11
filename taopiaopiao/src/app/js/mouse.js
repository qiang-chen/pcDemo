/**
 * @function[鼠标划过显示遮罩隐藏的函数]
 * @param{参数介绍}
 */
define([], function () {
    'use strict';
    const Mouse = function () {
        this.init()
    }
    Mouse.prototype = {
        constructor: Mouse,
        init() {
            this.mouseMask();
        },
        mouseMask() {
            let mask = document.querySelectorAll(".main-img-one");
            mask.forEach(item=>{
                item.onmouseover=()=>{
                    item.children[1].style.height="224px";
                };
                item.onmouseout=()=>{
                    item.children[1].style.height="0";
                }
            })
        }
    }
    return Mouse;
});