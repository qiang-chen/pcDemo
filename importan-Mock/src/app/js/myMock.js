define(['Mock',"ajax",'utils'], function(Mock,ajax,utils) {
    'use strict';
    let user=[];
    let arr=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
    for(let i=0;i<5;i++){
        user.push(Mock.mock({
            id:Mock.Random.guid(),
            cname:Mock.Random.cname(),
            words:Mock.Random.cword(),
            'age|16-36':1,
            'image|1':arr,
            brith:Mock.Random.date(),
            addr:Mock.mock('@county(true)')
        }));
    }
    //弄个假地址把这些数据传给他然后通过ajax请求出这些东西
    // Mock.mock("/api/login",{
    //     user:user,
    // });
    Mock.mock("/api/login",function(res){
        //console.log(utils.formartObj(res.body))
        //上面这个console能够输出通过ajax像mock传的data参数
        return user
    })

    ajax({
        url:"/api/login",
        type:"post",
        data:{a:1,b:2}
    }).then(function(res){
        //console.log(res)
    })

});