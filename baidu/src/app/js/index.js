define([], function () {
    'use strict';
    const Fn = function () {
        this.user = document.querySelector(".user");
        this.select = document.querySelector(".select");
        this.camera = document.querySelector(".camera");
        this.select_img = document.querySelector(".select-img");
        this.btn = document.querySelector("button");
        this.btnCamera = document.querySelector(".btnCamera");
        this.form = document.querySelector(".form")
        if (localStorage.baidu) {
            this.arr = JSON.parse(localStorage.baidu);
        } else {
            this.arr = [];
        }
        this.init()
    }
    Fn.prototype = {
        constructor: Fn,
        init() {
            this.show();
            this.local();
            this.scroll()
        },
        show() {
            this.user.onfocus = () => {
                this.select.style.display = "block";
                this.select_img.style.display = "none";
                this.user.removeAttribute("placeholder");
                this.btnCamera.style.display = "none";
                this.camera.style.display = "block";
                this.btn.innerHTML = "百度一下";
                let str = this.arr.map(item => {
                    return `<p>${item.val}</p>`
                }).join("");
                this.select.innerHTML = str;
            }
            document.onclick = (ev) => {
                let e = ev || window.event;
                let target = e.target || e.srcElement;
                if (target.tagName != 'INPUT') {
                    this.select.style.display = "none";
                }
                if (target.tagName != 'INPUT' && !target.classList.contains("select-img-add") && target.tagName != "P" && !target.classList.contains("camera") && target.tagName != "B" && !target.classList.contains("t")) {
                    this.select_img.style.display = "none";
                    this.user.removeAttribute("placeholder");
                    this.btn.innerHTML = "百度一下";
                    this.camera.style.display = "block";
                    this.btnCamera.style.display = "none";
                }
                return false;
            }
            //点击照相机让下方东西出现
            this.camera.onclick = () => {
                this.select_img.style.display = "block";
                this.btn.innerHTML = "";
                this.camera.style.display = "none";
                this.btnCamera.style.display = "block";
                this.user.setAttribute("placeholder", "在此处粘贴图片网址");
            }
        },
        local() {
            //input框输的东西作为本地存储
            this.btn.onclick = () => {
                let val = this.user.value;
                if (val) {
                    let opt = {
                        val,
                    }
                    this.arr.push(opt);
                    localStorage.setItem("baidu", JSON.stringify(this.arr));
                }

            }
        },
        scroll() {
            //吸顶效果
            let clone = document.querySelector(".logo").cloneNode(true).firstElementChild;
            document.onscroll = () => {
                let formT = this.form.getBoundingClientRect().top;
                let t = document.documentElement.scrollTop;
                //获取form这个和距离顶部的距离
                if (t > formT+160) {
                    this.form.insertBefore(clone, this.form.firstElementChild);
                    this.form.classList.add("fixed");
                } else {
                    if (this.form.children.length > 1) {
                        this.form.classList.remove("fixed");
                        this.form.removeChild(clone)
                    }
                }
            }

        }
    }
    return Fn;
});