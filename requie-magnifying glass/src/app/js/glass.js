define([], function () {
    function Glass() {
        this.smallImg = document.querySelectorAll(".bottom li");
        this.topImg = document.querySelectorAll(".top li");
        this.bigImg = document.querySelectorAll(".big li");
        this.init();
    }
    Glass.prototype = {
        constructor: Glass,
        init: function () {
            this.smallBtn();
            this.mouse()
        },
        smallBtn: function () {
            //给小图片添加点击事件
            this.smallImg.forEach((item,index)=>{
                item.onclick=()=>{
                    for(var i=0;i<this.smallImg.length;i++){
                        this.smallImg[i].classList.remove("active");
                        this.topImg[i].style.display="none";
                        this.bigImg[i].style.display="none";
                    }
                    this.topImg[index].style.display="block";
                    this.bigImg[index].style.display="block";
                    item.classList.add("active");
                }
            })
        },
        mouse:function(){
            //鼠标划过上方盒子出现放大镜 并且放大镜随着鼠标移动而移动改变
            let topBox=document.querySelector(".top");
            let mask=document.querySelector(".mask");
            let bigBox=document.querySelector(".big ul")
            topBox.onmouseover=()=>{
                mask.style.display="block";
                bigBox.style.display="block";

            }
            //鼠标离开隐藏
            topBox.onmouseout=()=>{
                mask.style.display="none";
                bigBox.style.display="none";

            }
            mask.onmousemove=(ev)=>{
                let e=ev||window.event;
                e.stopPropagation();
                let disX=e.clientX-topBox.offsetLeft-mask.offsetWidth/2;
                let disY=e.clientY-topBox.offsetTop-mask.offsetHeight/2;
                console.log(topBox.offsetLeft,topBox.offsetTop)
                //console.log(disX,disY)
                disX=disX<=0?0:e.clientX-topBox.offsetLeft-mask.offsetWidth/2;
                disY=disY<=0?0:e.clientY-topBox.offsetTop-mask.offsetHeight/2;
                if(disX>=topBox.offsetWidth-mask.offsetWidth){
                    disX=topBox.offsetWidth-mask.offsetWidth
                }
                if(disY>=topBox.offsetHeight-mask.offsetHeight){
                    disY=topBox.offsetHeight-mask.offsetHeight
                }
                mask.style.left=disX+"px";
                mask.style.top=disY+"px";
                //放大镜移动距离/盛放放大镜的盒子=大图片的移动距离/盛放大图片的盒子
                let bigLeft=-(disX/topBox.offsetWidth)*bigBox.offsetWidth;
                let bigTop=-(disY/topBox.offsetHeight)*bigBox.offsetHeight;
                this.bigImg.forEach((item,index)=>{
                    //console.log(item,bigLeft)
                    item.style.left=bigLeft+"px";
                    item.style.top=bigTop+"px";
                })
            }
        }
    }

    return Glass;
});