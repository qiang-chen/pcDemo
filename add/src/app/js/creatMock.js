define(['Mock'], function(Mock) {
    'use strict';
    let arr=[];
    let len=["js","html","css","jquery","node.js","vue","es6","h5","pc","require","java"];
    let t=["小米","苹果6","华为","三星","魅族","外星人","联想",]
    for(let i=0;i<6;i++){
        arr.push(Mock.mock({
            word:Mock.Random.cword(2),
            'title|1':len,
            'number|1-50':1,
            'type|1':t,
            'n|1-7':1,
        }))
    }
    return arr;
});