define(['jquery','creatMock','loading','Mock'], function($,creatMock,loading,Mock) {
    'use strict';
    Mock.mock('/api/test',function(){
        return creatMock;
    });
    $.ajax({
        url:'/api/test',
        data:null,
        type:"post",
    }).then(function(res){
        new loading(JSON.parse(res));
    })
});