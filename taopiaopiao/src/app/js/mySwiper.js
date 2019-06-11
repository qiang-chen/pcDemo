define(['Swiper'], function(Swiper) {
    new Swiper(".swiper-container",{
        autoplay:true,
        loop:true,
        navigation:{
            prevEl:'.swiper-button-prev',
            nextEl:'.swiper-button-next'
        }
    })
});