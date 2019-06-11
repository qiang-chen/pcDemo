define(['Swiper'], function(Swiper) {
    'use strict';
    new Swiper('.main-banner',{
        autoplay:true,
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        },
        pagination:{
            el:'.swiper-pagination'
        }
    })
});