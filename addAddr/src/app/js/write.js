define(['ajax', 'jquery'], function (ajax, $) {
    'use strict';
    /**
     * @function[此函数的作用是验证表格中的内容然后将它创建到页面中去]
     */
    const Write = function (opt) {
        //console.log(opt.creat);
        this.creat = opt.creat
        this.phone = opt.phone;
        this.postcode = opt.postcode;
        this.address = opt.address;
        this.str = ["街", "路", "号"];
        this.timer = null;
        this.remove = null;
        this.init();
    }

    Write.prototype = {
        constructor: Write,
        init() {
            this.verify();
            this.three();
            this.btnClick();
        },
        verify() {
            //验证一些操作的函数
            let that = this;
            let re = /^1[3,5,6,7,8,9]\d{9}$/;
            this.phone.onchange = function () {
                let phoneValue = this.value;
                if (!re.test(phoneValue)) {
                    alert("您输入的手机格式不对")
                }
            };
            //验证邮编
            let re1 = /^\d{6}$/;
            this.postcode.onchange = function () {
                let postcodeValue = this.value;
                if (!re1.test(postcodeValue)) {
                    alert("邮编只能是6位数字")
                }
            }
            //验证详细地址
            this.address.onchange = function () {
                let addressValue = this.value.split("");
                let flag = null;
                for (var i = 0; i < that.str.length; i++) {
                    flag = addressValue.some(item => {
                        //console.log(that.str[i].includes(item))
                        return that.str[i].includes(item);
                    });
                    if (flag) {
                        break
                    }
                }
                //console.log(flag)
                if (!flag) {
                    alert("您输入的地址好像查找不到,在检查一下呗")
                }
            }
        },
        three() {
            ajax({
                url: '../src/mask/data.json',
            }).then((res) => {
                this.render(res, $(".province"));
                this.event(res);
            })
        },
        render(data, box, str) {
            str = str || `<option value="">省份/自治区</option>`;
            str += data.map(item => {
                name = item.name ? item.name : item;
                return `<option value="">${name}</option>`
            });
            box.html(str);
        },
        event(data) {
            let that = this;
            let areaData = null;
            $(".province").on("change", function () {
                let str = `<option value="">城市/地区</option>`;
                that.render(data[this.selectedIndex - 1].city, $(".city"), str);
                areaData = data[this.selectedIndex - 1].city;
            });
            $(".city").on("change", function () {
                let str = `<option value="" class="area">区/县</option>`;
                that.render(areaData[this.selectedIndex - 1].area, $(".area"), str)
            })
        },
        btnClick() {
            let that = this;
            //点击确定按钮
            $(".save").click(function () {
                //点击保存的时候做的事
                let user = $(".user").val(); //获取用户名
                let phone = $(".number").val(); //获取手机号
                let province = $(".province option:selected").text(); //获取省市的字
                let city = $(".city option:selected").text(); //获取市的字
                let area = $(".area option:selected").text(); //获取县的字
                let address = $(".address").val(); //获取详细地址的字
                let postcode = $(".postcode").val(); //获取邮编的字
                let home = $(".home").val(); //获取家的字
                let arr = [user, phone, province, city, area, address, postcode, home];
                let flag = arr.every(item => {
                    return item.length != 0;
                });
                if (flag) {
                    if (/^1[3,5,6,7,8,9]\d{9}$/.test(phone)) {
                        if (!isNaN(postcode) && postcode.length == 6) {
                            that.addBox({
                                user,
                                phone,
                                province,
                                city,
                                area,
                                address,
                                postcode,
                                home
                            });
                            $(".alert-mask").get(0).removeChild($(".alert-mask").find(".alert").get(0));
                            $(".alert-mask").get(0).removeChild($(".alert-mask").find(".mask").get(0));
                        } else {
                            alert('邮编只能是6位数字');
                        }

                    } else {
                        alert('请您的手机号忘记改了');
                    }

                } else {
                    alert('请将信息填完整喽,不然找不到您');
                }
            })
            //点击取消按钮
            $(".cancel").click(function () {
                $(".alert-mask").get(0).removeChild($(".alert-mask").find(".alert").get(0));
                $(".alert-mask").get(0).removeChild($(".alert-mask").find(".mask").get(0));
            })
        },
        addBox(opt) {
            //添加盒子
            let str = `<div class="box">
            <div class="box-top">
                <span>${opt.user}</span><span>${opt.home}</span>
            </div>
            <div class="box-main">
                <p>${opt.phone}</p>
                <p><span>${opt.province}</span><span>${opt.city}</span><span>${opt.area}</span></p>
                <p>${opt.address}</p>
                <p>邮编:<span>${opt.postcode}</span></p>
                <b class="remove">编辑</b>
            </div>
        </div>`;
            let newBox = document.createElement("box");
            newBox.innerHTML = str;
            $(".container-main").get(0).insertBefore(newBox, $(".container-main").get(0).firstElementChild);
            let box = [...document.querySelectorAll(".box")];
            //box.push(this.box)
            let remove = [...document.querySelectorAll(".remove")];
            //remove.push(this.remove)
            //console.log(box)
            //当鼠标长按那个盒子的时候出现一个编辑
            box.forEach((item, index) => {
                item.onmousedown = () => {
                    this.timer = setTimeout(() => {
                        remove[index].style.display = "block";
                    }, 500)
                }
                item.onmouseup = () => {
                    clearTimeout(this.timer)
                }
            });
            //点击编辑的时候也要出现一个弹框
            remove.forEach(item => {
                item.onclick = () => {
                    this.creat();
                }
            })
        }
    }
    return Write
});