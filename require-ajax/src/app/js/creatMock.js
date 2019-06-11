define(['Mock','ajax','jquery'], function(Mock,ajax,$) {
    'use strict';
    /**
     * @function[生成随机数据]
     */
    let arr=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
    let user=[];
    for(let i=0;i<5;i++){
        user.push(Mock.mock({
            id:Mock.Random.guid(),
            name:Mock.Random.cname(),
            addr:Mock.mock('@county(true)'),
            'age|18-60':1,
            birth:Mock.Random.date(),
            sex:Mock.Random.integer(0,1),
            'img|1':arr,
            cparagraph:Mock.Random.cparagraph(),//段落
            csentence:Mock.Random.csentence(),//句子
            words:Mock.Random.cword()//单词
        }))
    }
    //mock生成随机数据后然后通过一个假地址把这个随机数据传给他 接着通过ajax获取这个假的数据
    //console.log(user)
    Mock.mock("/api/test",{
        url:user
    });
    ajax({
        url:"/api/test",
        type:"post",
    }).then(function(res){
        console.log(res)
    })
});