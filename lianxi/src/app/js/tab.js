define(['Swiper','jquery'], function(Swiper,$) {
    'use strict';
    class Tab{
        constructor(){
            this.tab=document.querySelectorAll(".tab span");
            this.mySwiper=null;
            this.init()
        }
        init(){
            this.auto();
            this.event();
            this.hover();
        }
        auto(){
            this.mySwiper=new Swiper('.swiper-container',{
                autoplay:true,
                on:{
                    slideChange:function(){
                        //轮播的过程中带动tab切换
                      $(".tab span").eq(this.activeIndex).addClass("active").siblings().removeClass("active")
                    }
                }
            })
        }
        event(){
            let that=this;
            $(".tab span").click(function(){
                //tab切换的时候带动下方轮播
                $(this).addClass("active").siblings().removeClass("active");
                let w=$(".swiper-slide").width()
                let index=$(this).index();
                that.myswiper.setTransition(1000);
                that.myswiper.setTranslate(-index * w);
            })
        }
        hover(){
            //鼠标划入box盒子让其停止轮播 离开继续
            let that=this;
            $(".box").hover(function(){
                that.mySwiper.autoplay.stop();
            },function(){
                that.mySwiper.autoplay.start();
            })
        }
    }
    return Tab;
});