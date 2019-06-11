define(['jquery'], function($) {
    'use strict';
    class Load{
        constructor(data){
            this.init(data)
        }
        init(data){
            this.render(data);
            this.scroll(data);
        }
        render(data){
            let str=data.map(item=>{
               return `<dl data="./app/img/${item.img}">
               <dt><img src="./app/img/ajax.gif" alt=""></dt>
               <dd><p>${item.word}</p><p>${item.addr}</p></dd>
           </dl>`
            }).join("");
            $(".main").append(str);
        }
        scroll(data){
            let that=this;
            document.onscroll=fn;
            function fn(){
                let t=$(document).scrollTop();//滚动距离
                let winH=window.innerHeight;//可视区高度
                let donH=document.body.offsetHeight;//文档高度
                const odl=document.querySelectorAll("dl");
                odl.forEach(item=>{
                    let t=item.getBoundingClientRect().top;
                    if(t<winH/2){
                        let src=$(item).attr("data");
                        let img=$(item).find("img");
                        img.attr("src",src)
                    }
                })
                if(winH+t>=donH){
                   let str=`<div class="load">
                   <span></span>
                   <span></span>
                   <span></span>
                   <span></span></div>`;
                   $(document.body).append(str);
                   document.onscroll=null;
                   setTimeout(()=>{
                        let html=data.map(item=>{
                            return `<dl data="./app/img/${item.img}">
                            <dt><img src="./app/img/ajax.gif" alt=""></dt>
                            <dd><p>${item.word}</p><p>${item.addr}</p></dd>
                        </dl>`
                        }).join("");
                        $(".load").remove();
                        $(".main").append(html);
                        document.onscroll=fn;
                   },2000)
                }
            }
        }
    }
    return Load;
});