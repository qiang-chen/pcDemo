define(['jquery','scroll'], function ($,scroll) {
    'use strict';
    /**
     * @function[此函数的作用是渲染地址页面的内容]
     */
    const Render = function () {
        this.init();
    }
    Render.prototype = {
        constructor: Render,
        init() {
            this.get();
            this.three();
           
        },
        get() {
            $.ajax({
                url: './mask/format.json'
            }).then((res) => {
                //console.log(res.Data)
                this.render([...res.Data])
            })
        },
        render(data) {
            let arr = [];
            data.forEach(item => {
                arr.push(item.PrefixEName)
            })
            arr = this.format(arr).sort();
            //添加26个字母
            let html = "<span>按拼音首字母选择：</span>";
            html += arr.map(item => {
                return `
                <a href="#">${item}</a>`
            }).join("");
            $(".main-title").html(html);
            //添加下方一大长传内容
            let all=arr.map(ele => {
                return `<div class="main-list">
                <span>${ele}</span>
                <span>${data.map(item => {
                    if(item.PrefixEName==ele){
                         return  `<a href="javascript:;">${item.Name}</a>`;
                    }
            }).join("")}
                </span>
            </div>`;
            }).join("");
            $(".main-count").html(all);
            new scroll();
        },
        format(str) {
            //封装一个数组去重函数
            let arr = [];
            let opj = {};
            for (let i = 0; i < str.length; i++) {
                if (!opj[str[i]]) {
                    arr.push(str[i]);
                    opj[str[i]] = "1";
                }
            }
            return arr;
        },
        three(){
            $.ajax({
                url: './mask/data.json'
            }).then((res) => {
                this.threeRender(res)
            })
        },
        threeRender(data){
            let str="<option>省份</option>";
            str+=data.map(item=>{
                return `<option>${item.name}</option>`;
            }).join("");
            $(".province").html(str);
            $(".province").get(0).onchange=()=>{
                let index=$(".province").get(0).selectedIndex;
                 let str1=`<option value="">城市</option>`;
                str1+=data[index-1].city.map(item=>{
                    return `<option>${item.name}</option>`;
                }).join("");
                $(".city").html(str1);
            }
        }
    }
    return Render;
});