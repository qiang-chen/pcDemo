define(['Mock'], function(Mock) {
    'use strict';
    /**
     * @function[创造数据的函数]
     * 此函数的作用是创造数据来用点击input框的时候下方出现的东西
     */

     let data=[];
     for(let i=0; i<8; i++){
        data.push(Mock.mock({
            'csentence':"小米"+Mock.Random.csentence(6),
            'number|1-100':100
        }))
     }
     return data;
});