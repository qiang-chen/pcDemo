define(['creatMock','render'], function(creatMock,render) {
    'use strict';
    
    new creatMock().then(function(res){
        //获取随机数据
        new render(res)
    });
    
});