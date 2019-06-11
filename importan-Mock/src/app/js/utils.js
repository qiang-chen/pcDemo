define([], function() {
    'use strict';
    /**
     * @function[封装两个函数用来处理ajax的数据]
     */
    let opj={
        formartStr:function(str){
            let newStr="";
            for(var i in str){
                newStr+=i+"="+str[i]+"&";
            }
            return newStr.slice(0,-1);
        },
        formartObj:function(opj){
            return JSON.parse('{"'+opj.replace(/\&/g,'","').replace(/\=/g,'":"')+'"}')
        }
    }
    return opj;
});