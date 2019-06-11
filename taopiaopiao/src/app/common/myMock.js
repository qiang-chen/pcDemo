
define(['mock'], function(Mock) {
    let arr=['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg'];
    let user=[];
    for(var i=0;i<30;i++){
        user.push(Mock.mock({
            name:Mock.Random.cname(),
            addr:Mock.mock('@county(true)'),
            'age|88-120':1,
            'image|1':arr,
        }))
    }
    return user;
});