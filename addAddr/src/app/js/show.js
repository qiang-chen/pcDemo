define(['write'], function (write) {
    'use strict';
    /**
     * @function[此函数的功能是点击创建的动态生成遮罩层然后让客户填写信息]
     */
    const Creat = function (opt) {
        this.box=document.querySelector(".box")
        // console.log(this.box)
        this.remove=document.querySelector(".remove");
        this.timer=null;
        this.init();
    };
    Creat.prototype = {
        constructor: Creat,
        init() {
            this.event();
        },
        event() {
            //点击加号的时候出现弹框
            let add = document.querySelector(".add");
            add.onclick = () => {
                this.creat();
            }
            //当鼠标长按那个盒子的时候出现一个编辑
                this.box.onmousedown=()=>{
                    this.timer=setTimeout(()=>{
                        this.remove.style.display="block";
                    },500)
                }
                this.box.onmouseup=()=>{
                    clearTimeout(this.timer)
                };
            //点击编辑的时候也要出现一个弹框
            this.remove.onclick=()=>{
                this.creat();
            }
        },
        creat() {
            let str = `<div class="alert">
            <p><input type="text" placeholder="收货人姓名" class="user"></p>
            <p><input type="text" placeholder="11位手机号" class="number"></p>
            <p class="p">
                <select name="" id="" class="province">
                    <option value="">省份/自治区</option>
                </select>&nbsp&nbsp&nbsp
                <select name="" id="" class="city">
                    <option value="">城市/地区</option>
                </select>
            </p>
            <p class="a">
                <select name="" id="" class="area">
                    <option value="" class="area">区/县</option>
                </select>
            </p>
            <p>
                <input type="textarea" placeholder="路名或街道地址门牌号" class="address">
            </p>
            <p><input type="text" placeholder="邮政编码" class="postcode"></p>
            <p>
                <input type="text" placeholder='地址标签:如"家"、"公司"等.限5个字以内' class="home">
            </p>
            <p>
                <button class="cancel">取消</button>&nbsp&nbsp&nbsp
                <button class="save">保存</button>
            </p>
        </div>
        <div class="mask"></div>`;
        let alertMask=document.querySelector(".alert-mask")
        alertMask.innerHTML=str;
        //调用表单操作的函数
        new write({
            phone:document.querySelector(".number"),
            postcode:document.querySelector(".postcode"),
            address:document.querySelector(".address"),
            creat:this.creat,
        });
        }
    }

    return Creat;
});