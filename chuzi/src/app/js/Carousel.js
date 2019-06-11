define([], function() {
    'use strict';
    function Fn(){
        this.list=document.querySelector(".list");
        this.olist=document.querySelector(".olist");
        this.index=0;
        this.timer=null;
        this.banner=document.querySelector(".banner");
        this.init()
    }
    Fn.prototype={
        constructor:Fn,
        init:function(){
            this.auto();
            this.clean();
            this.click();
        },
        auto:function(){
            var that=this;
            this.timer=setInterval(function(){
                that.index++;
                if(that.index>1){
                    that.index=0;
                }
                that.change();
            },1500)
        },
        clean:function(){
            var that=this;
            this.banner.onmouseover=function(){
                clearInterval(that.timer)
            };
            this.banner.onmouseout=function(){
                that.auto()
            };
        },
        change:function(){
            for(var i=0;i<this.list.children.length;i++){
                this.list.children[i].style.display="none";
                this.olist.children[i].classList.remove("active");
            }
            //console.log(that.list.children[that.index])
            this.list.children[this.index].style.display="block";
            this.olist.children[this.index].classList.add("active");
        },
        click:function(){
            var that=this;
            [...this.olist.children].forEach(function(item,i){
                item.onclick=function(){
                    that.index=i;
                    that.change()
                }
            })
        }
    }
    return Fn;
});