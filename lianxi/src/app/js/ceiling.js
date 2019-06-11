define(['jquery'], function($) {
    'use strict';
    /**
     * @function[此函数是做吸顶加模糊搜索功能的]
     */
    class Ceil{
        constructor(){
            this.init()
        }
        init(){
            this.ceil();
        }
        ceil(){
            document.body.onscroll=()=>{
                let t=document.documentElement.scrollTop;
                if(t>220){
                    $(".search").addClass("fixed")
                    $(".search").height(50)
                   $(".search").removeClass("search")
                    
                }else{
                    $(".search").addClass("search")
                    $(".search").removeClass("fixed")
                    
                }
            }
        }
    }
    return Ceil;
});