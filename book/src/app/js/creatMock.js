define(['Mock','jquery'], function (Mock,$) {
    'use strict';
    /**
     * @function[此函数是创造随机数据所使用的]
     */
    class Creat {
        constructor() {
            return this.init();
        }
        init() {
            let arr = [];
            let imgArr=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'];
            for (let i = 0; i < 150; i++) {
                arr.push(Mock.mock({
                    word:Mock.Random.cword(5),
                    'grade|1-10': 1, //评分的意思
                    'distance|3-20': 1, //距离市区的位置
                    addr: "东京" + Mock.mock("@county(true)"), //随机地名
                    'price|100-666': 1, //价格
                    'img|1':imgArr,//随机图片路径
                }))
            }
            return new Promise((resolve,reject)=>{
                resolve(arr)
            });
            //设置接口
            // Mock.mock('/api.test/',function(){
            //     return arr;
            // });
            // //ajax通过接口获取数据
            // $.ajax({
            //     url:'/api.test/',
            // }).then((res)=>{
            //     return JSON.parse(res);
            // })
        }
    }
    return Creat;
});