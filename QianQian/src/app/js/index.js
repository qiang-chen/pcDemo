define(['Swiper'], function(Swiper) {
    const Qian=function(){
        this.init();
    }
    Qian.prototype={
        constructor:Qian,
        init(){
            this.SwiperBan();
        },
        SwiperBan(){
            new Swiper(".demo",{
                autoplay:true,
                slidesPerView:5,
                navigation:{
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev'
                }
            });
            new Swiper(".rr",{
                autoplay:true,
                pagination:{
                    el:".swiper-pagation"
                }
            })
        }
    }
    return Qian
});