define(['Mock','ajax'], function (Mock,ajax) {
    'use strict';
    let user = [];
    for (let i = 0; i < 5; i++) {
        user.push(Mock.mock({
            id: Mock.Random.guid(),
            name: Mock.Random.cname(),
            cword: Mock.Random.cword(),
            'age|16-24': 1,
            addr: Mock.mock('@county(true)'),
            birth: Mock.Random.date()
        }));
    }
    Mock.mock("/api.admin/",{
        user
    });
    ajax({
        url:"/api.admin/",
        type:'post'
    }).then(function(res){
        console.log(res)
    })
});