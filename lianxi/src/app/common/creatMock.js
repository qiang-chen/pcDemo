define(['Mock'], function (Mock) {
    'use strict';
    let imgBox = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
    let arr = [];
    for (let i = 0; i < 1; i++) {
        arr.push(Mock.mock({
            word: Mock.Random.cword(3),
            'number|1-100': 1,
            addr: Mock.mock('@county(true)'),
            birth: Mock.Random.date(),
        }))
    }
    return arr;
});