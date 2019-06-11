define(['jquery'], function ($) {
    function Page() {
        this.index = null;
        this.dd=document.querySelector(".dd");
        this.init()
    }
    Page.prototype = {
        constructor: Page,
        init() {
            this.render();
        },
        render() {
            $.ajax({
                url: './app/js/data.json',
                success: (rs) => {
                    this.change(rs.slice(0, 3));
                    //调用小点函数
                    this.pagination(rs);
                    //调用点击小点的函数
                    this.btnClick(rs);
                    //点击上一页下一页函数
                    this.navigation(rs);
                },
            })
        },
        change(data) {
            //渲染数据函数
            let boxTop = document.querySelector(".top")
            let str = data.map(item => {
                return `<dl>
               <dt><img src="./app/images/${item.img}" alt=""></dt>
               <dd>
                   <p>加入购物车</p>
                   <p><span>￥${item.price}</span><span>￥103</span></p>
                   <p>${item.title}</p>
               </dd>
           </dl>`
            }).join("");
            boxTop.innerHTML = str
        },
        pagination(data) {
            //根据数据的长短来确定小点的个数
            let num = Math.ceil(data.length / 3);
            let str = "";
            let list = document.querySelector(".list");
            for (let i = 0; i < num; i++) {
                str += `<li>${i+1}</li>`
            }
            list.innerHTML = str;
            list.children[0].classList.add("active");
        },
        btnClick(data) {
            //点击小点切换上方数据
            let list = document.querySelector(".list");
            list.onclick = (ev) => {
                let e = ev || event;
                let target = e.target || e.srcElement;
                if (target.tagName === "LI") {
                    for (let i = 0; i < list.children.length; i++) {
                        list.children[i].classList.remove("active");
                        if (target === list.children[i]) {
                            this.index = i;
                        }
                    }
                    target.classList.add("active");
                    this.change(data.slice(this.index * 3, (this.index + 1) * 3));
                    this.dd.innerHTML=this.index;
                }
            }
        },
        navigation(data) {
            //下一页的切换
            let next = document.querySelector(".next");
            let list = document.querySelector(".list");
            let prev = document.querySelector(".prev");
            let num = Math.ceil(data.length / 3);
            next.onclick = () => {
                this.index++;
                if (this.index == num) {
                    this.index = 0;
                }
                for (let i = 0; i < list.children.length; i++) {
                    list.children[i].classList.remove("active");
                }
                list.children[this.index].classList.add("active");
                this.change(data.slice(this.index * 3, (this.index + 1) * 3));
                this.dd.innerHTML=this.index;
            }
            prev.onclick = () => {
                this.index--;
                if (this.index < 0) {
                    this.index = num-1;
                }
                for (let i = 0; i < list.children.length; i++) {
                    list.children[i].classList.remove("active");
                }
                list.children[this.index].classList.add("active");
                this.change(data.slice(this.index * 3, (this.index + 1) * 3));
                this.dd.innerHTML=this.index;
            }
        }
    }

    return Page;
});