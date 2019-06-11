define([], function () {
    'use strict';
    //因为本文档需要封装多个函数 而return只能出去一个 所以需要把他们挂在对象里面就可以了
    let init = {
        /**
         * @function[封装ajax数据传入的格式]
         * @param{对象}
         * 因为传参的时候post的请求是user=55&pwd=88;这种格式
         * 而我们传的是{user:55,ped:88}这种格式 所以我们需要转换一下
         */
        formateObj(obj){
            //此时obj是传过来的对象 我们需要把这个对象转成字符串
            let str="";
            for(let i in obj){
                str+=i+"="+obj[i]+"&";
            }
            return str.slice(0,-1);
        },
        /**
         * @function[封装ajax数据传出的函数]
         * @param{字符串}
         * 因为ajax给我们传出的参数是user=55&pwd=88这种格式 而我们需要的是{user:55,ped:88}
         * 这种格式 所以需要我们封装一个函数转换一下
         */
        formateStr(str){
            return JSON.parse('{"'+str.replace(/&/g,'","').replace(/=/g,'":"')+'"}')
        }
    }
    return init;
});