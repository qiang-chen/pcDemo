define(['creatMock', 'Mock', 'ajax', 'jquery'], function (creatMock, Mock, ajax, $) {
    'use strict';
    Mock.mock('/api/test', function () {
        return creatMock;
    });
    ajax({
        url: '/api/test',
        type: "post",
        data: "name=4&age=7"
    }).then(function (res) {
        render(res);
        scroll(res)
    });

    function scroll(res) {
        document.onscroll = function () {
            let winH=window.innerHeight;
            let t=document.documentElement.scrollTop;
            let domH
            render(res)
        }
    }


    function render(res) {
        let str = res.map(item => {
            console.log(item);
            return `<div class="title">
            <p>${item.word}</p>
            <p>${item.number}</p>
            <p>${item.birth}</p>
            <p>${item.addr}</p>
        </div>`
        });
        $(".main").append(str)
    }
});