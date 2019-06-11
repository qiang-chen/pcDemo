//懒加载函数
define([], function() {
    const Lazyload=function(opt){
        //参数是那个懒加载的元素
        this.el=document.querySelectorAll(opt.img);
        this.init();
    }
    Lazyload.prototype={
        constructor:Lazyload,
        init(){
            this.lazyloadfn()
        },
        lazyloadfn(){
            //懒加载的原理是判断每一个图片距离顶部的距离与可视区的高度进行的比较 如果小于可视区的高度的话就让正常图片加载出来 如果大于就用假图片替代 真图片的实际路径可以在一个盒子上设置一个data-src属性 让这个属性值等于真图片的路径 
            //第二点这个函数需要调用两次 一次是在页面刚加载的时候调用一遍 另一次是在滚动事件中进行  如果去掉第一次的话会出现用户滑动一半以后一刷新页面就会全变成假图片了  原因自己想去
            this.el.forEach(item=>{
                let rlTop=item.getBoundingClientRect().top;
                let winT=window.innerHeight;
                if(rlTop<winT){
                    let img=item.firstElementChild.firstElementChild.firstElementChild;
                    let data=item.firstElementChild.firstElementChild.getAttribute("data-src");
                    img.setAttribute("src",data)
                }

            })
        }
    }

    return Lazyload;
});