define(['Mock','jquery'], function (Mock,$) {
    'use strict';
    /**
     * @function[此函数作用是随机生成json数据]
     */
    let img=["xcnp.jpg","xfxb.jpg","xsqkr.png","jpjp.jpg","fmj.jpg"]
    let arr = [];
    for (let i = 0; i < 6; i++) {
        arr.push(Mock.mock({
            word: Mock.Random.cword(3),
            'age|50-103': 1,
            'number|88-156': 1,
            words: Mock.Random.cword(9),
            'img|1':img
        }));
    }
    Mock.mock('/api/test',function(){
        return arr;
    });
    
});