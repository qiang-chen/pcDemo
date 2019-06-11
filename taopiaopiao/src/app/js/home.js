define(['mySwiper', 'myMock', 'render', 'lazyload','Enter',"mouse"], function (mySwiper, myMock, render, Lozyload,Enter,mouse) {
        mySwiper;
        myMock;
        new render({
                "main": document.querySelector(".main-img")
        });
        //页面一加载调用一次懒加载函数
        //为了看出效果 加个定时器 让其一秒后调用
        setTimeout(function () {
                new Lozyload({
                        "img": ".main-img-one"
                });
        }, 1000)

        //页面滚动的时候调用一次
        window.addEventListener('scroll', function () {
                setTimeout(function () {
                        new Lozyload({
                                "img": ".main-img-one"
                        });
                }, 1000)
        });
        new Enter();
        new mouse()
});