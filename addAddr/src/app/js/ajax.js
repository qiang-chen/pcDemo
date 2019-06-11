define([], function() {
    'use strict';
    /**
     * @function[此函数是封装ajax的]
     */
    function ajax(opt){
        let def={
            data:{},
            async:true,
            type:"get"
        }
        let defs=Object.assign({},def,opt);
        return new Promise(function(resolve,reject){
            let xhr=window.XMLHttpRequest?new XMLHttpRequest():ActiveXObject("Microsoft.XMLHTTP");
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    if(xhr.status==200){
                        resolve(JSON.parse(xhr.responseText))
                    }else{
                        reject(xhr.status)
                    }
                }
            }
            if(defs.type=="get"){
                xhr.open(defs.type,defs.url+"?"+defs.data,defs.async);
                xhr.send(null)
            }else{
                xhr.open(defs.type,defs.url,defs.async);
                xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
                xhr.send(defs.data)
            }
        })
    }

    return ajax;
});