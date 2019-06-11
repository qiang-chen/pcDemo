define(['jquery'], function ($) {
    'use strict';
    /**
     * @function[此函数主要作用是加载页面的时候会因为一些网速问题让页面加载速度慢，所以创造一个loading]
     */
    const Loading = function () {
        this.init();
    }
    Loading.prototype = {
        constructor: Loading,
        init() {
            this.scroll();
        },
        scroll() {
            function fn() {
                let winH = document.documentElement.clientHeight; //浏览器的高度
                let domH = document.body.offsetHeight;
                let t = document.documentElement.scrollTop;
                if(winH+t>=domH){
                    //添加loading
                    let str=`<div class="load">
                    <span></span><span></span><span></span><span></span></div>`;
                    $(document.body).append(str);
                    //填完一次结束这个滚动事件 不能让他一直添加
                    document.removeEventListener("scroll",fn);
                    //将ajax传过来的数据渲染到页面上
                    $.ajax({
                        url: '/api/test'
                    }).then(function (res) {
                        setTimeout(function () {
                            let data=JSON.parse(res);
                            let arr=`<div class="content-title">
                            <p>
                                <span>有格调</span>
                                <a href="#">全部
                                    <i></i>
                                </a>
                                <a href="#">约会聚餐<i></i></a>
                                <a href="#">丽人spa<i></i></a>
                                <a href="#">品质出游<i></i></a>
                            </p>
                        </div>
                        <div class="content-main">`
                            arr+=data.map(item=>{
                                return `<div class="content-main-box">
                                <ul>
                                    <li><img src="./app/img/${item.img}" alt=""></li>
                                    <li class="h"><span>${item.word}</span>&nbsp;&nbsp;&nbsp;<span>(趵突泉店)</span></li>
                                    <li class="h">3份${item.words}</li>
                                    <li class="h"><span>￥${item.age}</span><s>门市价￥${item.number}元</s><span>大明湖</span></li>
                                </ul>
                           </div> `;
                            }).join("");
                            arr+=`</div>`;
                            $(".load").remove()
                            $(".c").append(arr);
                            document.addEventListener("scroll",fn);
                        }, 2000);
                    });
                }
            }
            document.addEventListener("scroll", fn)
        }
    }
    return Loading;
});