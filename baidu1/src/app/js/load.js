define(['jquery'], function ($) {
    /**
     * 
     * @param {此函数是写页面内容的渲染}
     */
    function Load(res) {
        this.data = res;
        this.init()
    }
    Load.prototype = {
        constructor: Load,
        init: function () {
            this.render()
            this.scrollRender()
        },
        render(){
                let str1 = this.data.map(item => {
                    return `<div class="news">
                <div class="news-pic">
                    <img src="${item.src}" alt="">
                </div>
                <div class="news-con">
                    <div class="news-con-container">
                        <h2>${item.title}</h2>
                        <div class="redian">
                            <span>${item.net}</span>
                            <span>${item.time}</span>
                            <a href="#">热点</a>
                        </div>
                    </div>
                </div>
            </div>`
                }).join("");
            $(".con-left").append(str1);
        },
        scrollRender: function () {
            var that = this;
            function lint() {
                return new Promise((resolve,reject)=>{
                    setTimeout(function(){
                        resolve(that.data)
                    },2000)
                })
            };
            function fn() {
                //console.log(that.data)
                let domH = document.body.offsetHeight; //文档高度
                let winH = document.documentElement.clientHeight; //窗口高度
                let t = document.documentElement.scrollTop; //滚动距离
                if (t + winH >= domH) {
                    console.log(t + winH, domH)
                    let str = `<div class="load"><img src="./app/img/load.gif" alt=""></div>`;
                    $(".con-left").append(str);
                    document.removeEventListener("scroll", fn);
                    lint().then(function () {
                        that.render()
                        $(".con-left").find(".load").remove();
                     
                        document.addEventListener("scroll", fn)
                    })
                }
            }
            document.addEventListener("scroll", fn)
        }

    }

    return Load;
});