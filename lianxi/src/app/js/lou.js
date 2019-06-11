define([], function() {
    'use strict';
    class Lou{
        constructor(){
            this.init()
        }
        init(){
            this.event()
        }
        event(){
            $(".left span").click(function(){
                $(this).addClass("active").siblings().removeClass("active");
                let winW=window.innerHeight;
                let index=$(this).index();
                document.documentElement.scrollTop=index*winW;
            })
        }
    }
    return Lou;
});