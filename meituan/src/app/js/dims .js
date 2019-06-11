define(['jquery'], function ($) {

    /**
     * @function[此函数作用是写模糊搜索功能]
     */
    const Dims = function () {
        this.init()
    }
    Dims.prototype = {
        constructor: Dims,
        init() {
            this.event()
        },
        event() {
            $(".search input").get(0).oninput = function () {
                let arr=[];
                let val = this.value.trim();
                if (val.length != 0) {
                    $.ajax({
                        url: './mask/format.json'
                    }).then(function (res) {
                        res.Data.forEach(function (ele) {
                            //console.log(ele.Name.includes(val));
                            if (ele.Name.includes(val)) {
                                $(".search-select").find("a").remove();
                                arr.push(ele.Name)
                                let h=arr.map(item=>{
                                    return `<a href="#" class="add">${item}</a>`
                                })
                               $(".search-select").html(h);
                            }
                            if(arr.length==0){
                                $(".search-select").find("a").remove()
                                let hh=`<a href="#" class="add">未找到匹配项</a>`;
                                $(".search-select").html(hh)
                               }
                        })
                    })
                }else{
                    $(".search-select").find("a").remove()
                }

            }
        }
    }
    return Dims;
});