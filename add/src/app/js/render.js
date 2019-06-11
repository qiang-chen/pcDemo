define(['jquery', 'alert'], function ($, alert) {
    'use strict';
    class Render {
        constructor(data) {
            this.init(data);

        }
        init(data) {
            this.render(data);
            this.search(data)
        }
        render(data,f) {
            //将内容渲染到页面上
            let str = data.map(item => {
                //console.log(data)
                let it = item.title ? item.title : item.user;
                let iw = item.word ? item.word : "";
                let inu = item.number ? item.number : 6;
                let itn = item.n ? item.n : 3;
                return `<div class="box">
                <div class="box-title"><span>1</span></div>
                <div class="box-main">
                    <dl>
                        <dt><span></span></dt>
                        <dd>
                            <p><span class="title">${it}</span>${iw}</p>
                            <p><span>${inu}</span>分钟之前</p>
                        </dd>
                    </dl>
                </div>
                <div class="box-bottom">
                    <p>${itn}页面·<span>${item.type}</span></p>
                </div>
                <div class="none">
                        <div class="box-title"><span>1</span></div>
                        <ul>
                            <li><span>编辑项目</span></li>
                            <li><span>编辑工作流</span></li>
                        </ul>
                        <div class="p"><span class="she">设置</span><span>分享</span><span>打开</span><span class="duo">更多<div class="two"><a href="#">创建副本</a><a href="#">移动</a><a href="#" class="removebtn">删除</a></div></span></div>
                    </div>
            </div>`
            });
            if(f){
                //console.log(data)
                $(".container").html(str);
                
            }else{
                //console.log(data)
                $(".container").append(str);
            }
            
            this.event();
            this.mouse();
        }
        mouse() {
            //划过显示隐藏
            $(".box").on("mouseover", function () {
                this.lastElementChild.style.display = "block"
            })
            $(".box").on("mouseout", function () {
                this.lastElementChild.style.display = "none";
            });
            $(".duo").click(function () {
                $(this).find(".two").show()
            })
        }
        event() {
            let that = this;
            let arr = [];
            let dom = [];
            $(".she").click(function () {
                //点击设置的时候调用插件弹框
                let parent = $(this).parents(".box");
                let title = parent.find(".title").html();
                new alert({
                    val: title,
                    fn: function (opt) {
                        let data = [];
                        data.push(opt)
                        that.render(data)
                    }
                })
            })
            //点击删除出个弹框
            $(".removebtn").click(function () {
                let flag = confirm("您确定删除吗");
                //console.log($(this).parent())
                $(this).parent().hide()
                //console.log(flag)
                if (flag) {
                    //获取一下这个要删除的元素属性
                    let title = $(this).parents(".box").find(".title").html();
                    arr.push(title);
                    dom.push($(this).parents(".box").clone(true));
                    $(this).parents(".box").remove();
                    //console.log(arr, dom)
                    that.back(arr, dom)
                }

            });
        }
        back(arr, dom) {
            let that = this;
            $(".back").click(function (item) {
                let str = `<div class="mask"></div>
                <div class="alert">
                    <div class="alert-title">
                        <span>设置</span><span class="guan">×</span>
                    </div>
                    <div class="alert-main">
                        ${arr.map(item=>{
                            return `<div class="list"><span class="typeTittle">${item}</span><span class="an">恢复</span></div>`
                        }).join("")}
                </div>`;
                $(".cover").html(str);
                $(".guan").click(function () {
                    $(".mask").remove();
                    $(".alert").remove()
                })
                that.recover(arr,dom);
            })
        }
        recover(arr,dom) {
            $(".an").click(function () {
                let index = $(this).parent().index();
                //console.log($(this).parent())
                $(this).parent().remove();
                $(".container").append(dom[index]);
                $(".none").hide()
                dom.splice(index,1)
                arr.splice(index,1)
                //console.log(dom,arr)
                // $(".mask").remove();
                // $(".alert").remove()
            })
        }
        search(data){
            let that=this;
            $(".search input").on("input",function(){
                let val=$(this).val();
                let newData=data.filter(item=>{
                    let faag=val?item.title.includes(val):true;
                    return faag
                });
                that.render(newData,9)
            })
        }
    }
    return Render;
});