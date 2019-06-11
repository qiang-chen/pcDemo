define(['myMock'], function (myMock) {
    const Render = function (opt) {
        this.main = opt.main;
        console.log(this.main)
        this.init();
    }
    Render.prototype = {
        constructor: Render,
        init() {
            const arr = myMock;
            let html = arr.map(item => {
                //console.log(item.addr)
                return `<div class="main-img-one">
        <dl>
            <dt data-src="./app/img/${item.image}"><img src="./app/img/ajax.gif" alt=""></dt>
            <dd>选座购票</dd>
        </dl>
        <div class="mask">
            <p>导演: ${item.name}</p>
            <p>主演: 玉麟</p>
            <p>类型: 动作</p>
            <p>地区: ${item.addr.slice(0,2)}</p>
            <p>时长: ${item.age}分钟</p>
        </div>
    </div>`;
            }).join("");
            this.main.innerHTML = html;
        }
    }
    return Render;
});