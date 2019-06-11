define(['creatMock','jquery','render','Mock'], function(creatMock,$,render,Mock) {
    'use strict';
    Mock.mock('/api/test',function(){
        return creatMock;
    });

    $.ajax({
        url:'/api/test',
    }).then(function(res){
        new render(JSON.parse(res))
    })
});