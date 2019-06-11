define([], function() {
    'use strict';
    const Show=function(){
        this.init()
    }
    Show.prototype={
        constructor:Show,
        init(){
            const nav=document.querySelector(".nav");
            const ulselect=document.querySelector(".ulselect");
            nav.onmouseover=function(){
                ulselect.style.height='222px';
            }
            nav.onmouseout=function(){
                ulselect.style.height='0';
            }
        }
    }
    return Show;
});