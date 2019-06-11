define(['Mock'], function (Mock) {
    'use strict';
    let imgArr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];
    let arr = [];
    for (let i = 0; i < 4; i++) {
        arr.push(Mock.mock({
            word: Mock.Random.cword(5),
            addr:Mock.mock('@county(true)'),
            'img|1': imgArr,
        }))
    }
    return arr;
});