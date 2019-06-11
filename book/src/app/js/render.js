define(['jquery','loading'], function ($,loading) {
    'use strict';
    class Render{
        constructor(data){
            this.init(data)
        }
        init(data){
            this.render(data);
            this.filter(data)
        }
        render(data){
            let str=data.map(item=>{
                return `<dl data="${item.img}">
                <dt>
                    <img src="./app/img/ajax.gif" alt="">
                </dt>
                <dd>
                    <p>${item.word}</p>
                    <p>评分是<span>${item.grade}</span></p>
                    <p>距离市区的位置是<span>${item.distance}</span>公里</p>
                    <p>酒店价格<span>${item.price}</span></p>
                    <p>位置在<span>${item.addr}</span></p>
                </dd>
            </dl>`
            }).join("");
            $(".box-right").html(str);
            new loading()
        }
        filter(data){
            $("button").click(()=>{
                let price=$(".price option:selected").val();
                let grade=$(".grade").val();
                let addr=$(".addr").val();
                //console.log(addr)
                let newData=data.filter(item=>{
                    let flag3=addr?item.addr.includes(addr):true;
                    let flag1=price?price>=item.price:true;
                    let flag2=grade?item.grade==grade:true;
                    return flag1&&flag2&&flag3
                });
                this.render(newData)
            })
        }
    }
    return Render;
});