define(['Mock', 'utils'], function (Mock, utils) {
    /**
     * @function[此函数功能是接受前端传过来的数据与数据库的值进行比较然后返回给前端比较后的结果]
     */

    //自己写一个后端数据库
    let arr = [{
        user: "jQuery",
        pwd: "123"
    }, {
        user: "node",
        pwd: "123"
    }, {
        user: "vue",
        pwd: "123"
    }];

    Mock.mock('/api/login', function (res) {
        //console.log(res)
        let {
            user,
            pwd
        } = utils.formateStr(res.body);
        // arr.push(utils.formateStr(res.body))
        // console.log(arr)
        let flag = arr.some(item => {
            return item.user == user && item.pwd == pwd;
        });
        if (flag) {
            //console.log(flag)
            return {
                code: 0,
                msg: 'success'
            }
        }else{
            return {
                code:1 ,
                msg: 'error'
            }
        }
    })
});