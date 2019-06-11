define(['jquery'], function($) {
    'use strict';
    const Fn=function(){
        this.init()
    }
    Fn.prototype={
        constructor:Fn,
        init(){
            var str="";
            $.ajax({
                url:'../src/mask/chuizi.json',
                success:function(res){
                    res.data.home_carousel.forEach(item=>{
                        str+=item.image.map(item=>{
                            //console.log(item)
                            return `<div class="main-title-one"> <img src="${item}" alt=""></div>`
                        }).join("")
                    });
                    console.log(str)
                    $(".main-title").html(str)
                }
            })
        }
    }
    return Fn;
});